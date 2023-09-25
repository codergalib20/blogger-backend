import Surah from "./surah.model";

const createSurah = async (req, res) => {
  const {
    name,
    transliteration,
    number,
    translation,
    revelation_type,
    total_verses,
    verses,
  } = req.body;

  try {
    const surah = await Surah.create({
      name,
      transliteration,
      number,
      translation,
      revelation_type,
      total_verses,
      verses,
    });
    if (!surah) {
      res.status(404).json({ msg: "Surah not found!!" });
    } else {
      res.status(201).json({ message: "Surah Created", data: surah });
    }
  } catch (err) {}
};

const getAllSurah = async (req, res) => {
  const { native = "en" } = req.query || {};
  try {
    const count = await Surah.countDocuments();
    const findSurah = await Surah.find({}).select(
      `name transliteration number translation revelation_type total_verses verses.audio_one verses.verses verses.text verses.${native}.text`
    );
    if (!findSurah) {
      res.status(404).json({ msg: "Surah not found!!" });
    } else {
      res.status(201).json({ message: "Surah Loaded", count, data: findSurah });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to create section", err });
  }
};

export { getAllSurah, createSurah };
