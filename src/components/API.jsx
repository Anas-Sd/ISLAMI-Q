import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trackEvent } from "../assets/analytics";
import referenceData from "../assets/ReferenceData";

const API = () => {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("aayah");
    const [value, setValue] = useState("");
    const [result, setResult] = useState(null);
    const [englishResult, setEnglishResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingEnglish, setLoadingEnglish] = useState(false);
    const [error, setError] = useState("");
    const [showEnglishButton, setShowEnglishButton] = useState(false);
    const [showClear, setShowClear] = useState(false);
    const [showPageMsg, setShowPageMsg] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [block, setBlock] = useState(false);

    useEffect(() => {
        if (activeTab === "page")
            setShowPageMsg(true);
        else
            setShowPageMsg(false)

    }, [activeTab]);
    useEffect(() => {
        const getSessionUser = async () => {
            const { data } = await supabase.auth.getSession();
            setUser(data.session?.user ?? null);
        };

        getSessionUser();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const tabs = [
        { id: "aayah", label: "Aayah", placeholder: "E.g. (1 - 6236) or (2: 10)" },
        { id: "surah", label: "Surah", placeholder: "Enter surah number (1 - 114)" },
        { id: "ruku", label: "Ruku", placeholder: "Enter ruku number E.g (2 : 40)" },
        { id: "page", label: "Page", placeholder: "Enter page number (1 - 604)" },
    ];

    const currentTab = tabs.find((tab) => tab.id === activeTab);

    const handleSearchWithValue = async (searchValue) => {
        if (!user) {
            setError("Please login to use this feature.");
            return;
        }

        let url = "";

        if (activeTab === "aayah") {
            if (!searchValue.includes(":")) {
        const num = Number(searchValue);
        if (num < 1 || num > 6236) {
            setError(`There is no aayah number ${searchValue}`);
            setShowEnglishButton(false);
            setResult(false);
            return;
        }
    }
            url = `https://api.alquran.cloud/v1/ayah/${searchValue}/quran-uthmani`;
        }

       if (activeTab === "surah") {

    const num = Number(searchValue);

    if (num < 1 || num > 114) {
        setError(`There is no surah number ${searchValue}`);
        setShowEnglishButton(false);
        setResult(null);
        return;
    }

    url = `https://api.alquran.cloud/v1/surah/${searchValue}/quran-uthmani`;
}

        if (activeTab === "page") {
            const num = Number(searchValue);

    if (num < 1 || num > 604) {
        setError(`There is no page number ${searchValue}`);
        setShowEnglishButton(false);
        setResult(null);
        return;
    }
            url = `https://api.alquran.cloud/v1/page/${searchValue}/quran-uthmani`;
        }

        if (activeTab === "ruku")
            setBlock(true);

        try {
            setLoading(true);
            setError("");
            setResult(null);

            const res = await fetch(url);
            const data = await res.json();

            if (data.code !== 200) {
                throw new Error("Invalid input");
            }

            setResult(data.data);
            setShowEnglishButton(true);
            setShowButtons(true);

        } catch {
            setError("Something went wronggg.");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        trackEvent("go_clicked", {
            tab: activeTab,
        });
        if (!user) {
            setError("Please login to use this feature.");
            setResult(null);
            return;
        }
        if (!value) {
            setError("Please Enter a Value");
            return;
        }

        let url = "";

        if (activeTab === "aayah") {
            if(value<1 || value>6236)
            {
                setError(`There is no aayah number ${value}`)
                setShowEnglishButton(false)
                setResult(false)
                return
            }
            url = `https://api.alquran.cloud/v1/ayah/${value}/quran-uthmani`;
        }

        if (activeTab === "surah") {
            if (value < 1 || value > 114) {
                setResult(null);
                setShowEnglishButton(false);
                setError("Enter a valid Surah No");
                return;
            }
            url = `https://api.alquran.cloud/v1/surah/${value}/quran-uthmani`;
        }

        if (activeTab === "ruku") {

            if (!value.includes(":")) {
                setError("Enter format Surah:Ruku (example 17:1)");
                return;
            }

            const [surah, ruku] = value.split(":").map(Number);

            const surahInfo = referenceData.surahData.find(
                (s) => s.number === surah
            );

            if (!surahInfo) {
                setError("Invalid Surah");
                return;
            }

            const totalRukusInSurah =
                (surahInfo.rukuEnd + 1) - surahInfo.rukuStart;

            if (surah == 28 && ruku == 9) {
                setError("The 9th ruku of surah 28 is merged with 8th ruku, So Please check 8th ruku of surah 28")
                setResult("");
                setEnglishResult("");
                return;
            }

            if (ruku < 1 || ruku > totalRukusInSurah) {
                setError("Invalid Ruku number for this Surah");
                setResult("");
                setEnglishResult("");
                return;
            }

            const globalRuku =
                (surahInfo.rukuStart + 1) + (ruku - 1);

            url = `https://api.alquran.cloud/v1/ruku/${globalRuku}/quran-uthmani`;
        }

        if (activeTab === "page") {
            if (value < 1 || value > 604) {
                setResult(null);
                setShowEnglishButton(false);
                setError("Enter a valid page No");
                return;
            }
            url = `https://api.alquran.cloud/v1/page/${value}/quran-uthmani`;
        }

        try {
            setLoading(true);
            setError("");
            setResult(null);
            setEnglishResult(null);
            setShowEnglishButton(false);
            setShowClear(false);

            const res = await fetch(url);
            const data = await res.json();

            if (data.code !== 200) {
                throw new Error("Invalid input");
            }

            setResult(data.data);
            setShowEnglishButton(true);
            setShowButtons(true);
            setShowClear(true);
        } catch (error) {
            setError("Something went wrong. Check your input.");
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    const handleClear = async () => {
        setResult(null);
        setEnglishResult(null);
        setError(null);
        setShowEnglishButton(false);
        setShowClear(false);
        setValue("");
        setShowButtons(false);
    };

    const handleGenerateEnglish = async () => {
        trackEvent("generate_english_clicked", {
            tab: activeTab,
        });
        if (!value) return;

        let url = "";

        if (activeTab === "page") {
            url = `https://api.alquran.cloud/v1/page/${value}/en.asad`;
        }

        if (activeTab === "aayah") {
            url = `https://api.alquran.cloud/v1/ayah/${value}/en.asad`;
        }

        if (activeTab === "surah") {
            url = `https://api.alquran.cloud/v1/surah/${value}/en.asad`;
        }

        if (activeTab === "ruku") {

            if (!value.includes(":")) {
                setError("Enter format Surah:Ruku (example 17:1)");
                return;
            }

            const [surah, ruku] = value.split(":").map(Number);

            const surahInfo = referenceData.surahData.find(
                (s) => s.number === surah
            );

            if (!surahInfo) {
                setError("Invalid Surah");
                return;
            }

            if (surah === 28 && ruku === 9) {
                setError("The 9th ruku of surah 28 is merged with 8th ruku.");
                return;
            }

            const totalRukusInSurah =
                surahInfo.rukuEnd - surahInfo.rukuStart + 1;

            if (ruku < 1 || ruku > totalRukusInSurah) {
                setError("Invalid Ruku number for this Surah");
                return;
            }

            const globalRuku =
                (surahInfo.rukuStart + 1) + (ruku - 1);

            url = `https://api.alquran.cloud/v1/ruku/${globalRuku}/en.asad`;
        }

        try {
            setLoadingEnglish(true);
            setError("");
            setEnglishResult(null);

            const res = await fetch(url);
            const data = await res.json();

            if (data.code !== 200) {
                throw new Error("Invalid input");
            }

            setEnglishResult(data.data);

        } catch (error) {
            setError("Failed to load English translation.");
        } finally {
            setLoadingEnglish(false);
        }
    };

    const getNextAyah = (input) => {
        if (!input.includes(":")) {
            return String(Number(input) + 1);
        }

        const [surah, ayah] = input.split(":").map(Number);
        const surahInfo = referenceData.aayahData.find(s => s.surah === surah);
        if (!surahInfo) return null;

        if (ayah < surahInfo.ayahEnd) {
            return `${surah}:${ayah + 1}`;
        } else {
            if (surah === 114) return null;
            return `${surah + 1}:1`;
        }
    };

    const getPrevAyah = (input) => {
        if (!input.includes(":")) {
            return String(Number(input) - 1);
        }

        const [surah, ayah] = input.split(":").map(Number);

        if (ayah > 1) {
            return `${surah}:${ayah - 1}`;
        } else {
            if (surah === 1) return null;
            const prevSurah = referenceData.aayahData.find(s => s.surah === surah - 1);
            return `${surah - 1}:${prevSurah.ayahEnd}`;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-screen bg-gradient-to-br from-[#0f2e23] via-[#0b241c] to-[#061612] text-white flex items-center justify-center px-6"
        >
            <motion.div
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-3xl"
            >
                <p className="text-yellow-500 text-center text-medium mb-4 tracking-wide">
                    ✦ ا ستكشف القرآن بدقة  ✦
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-center mb-10">
                    Explore the{" "}
                    <span className="text-yellow-500">Quran</span>{" "}
                    with Precision
                </h1>
                <div className="mt-8 bg-[#0e2a21] border border-yellow-500/30 rounded-2xl p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#13372b] rounded-xl p-2 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setValue("");
                                    setResult(null);
                                    setEnglishResult(null);
                                    setError("");
                                    setShowEnglishButton(false);
                                }}
                                className={`w-full px-4 py-2 rounded-lg text-sm transition ${activeTab === tab.id
                                    ? "bg-yellow-500 text-black"
                                    : "text-gray-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {activeTab === "page" && (
                        <p className="text-yellow-500 text-[0.2cm] -mt-4 text-center mb-4 sm:text-sm block">[This Quran is from "Uthmani's" Edition so the pages will be from the respective book]</p>
                    )}
                    {/* Input */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={currentTab.placeholder}
                            className="flex-1 bg-[#123d30] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />

                        <button
                            onClick={handleSearch}
                            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition"
                        >
                            {loading ? "Loading..." : "Go"}
                        </button>



                        {showEnglishButton && (
                            <button
                                onClick={handleGenerateEnglish}
                                className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition"
                            >
                                {loadingEnglish ? "Generating..." : "Generate English"}
                            </button>
                        )}
                    </div>

                    <div className="mb-2 sm:mb-3 flex gap-4 mt-3">

                        <Link
                            to={"/reference"}
                            onClick={() => trackEvent("reference_clicked")}
                            className={`${showClear ? "flex-[3]" : "w-full"}`}
                        >
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
                                Reference
                            </button>
                        </Link>

                        {showClear && (
                            <button
                                onClick={handleClear}
                                className="flex-[1] bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition"
                            >
                                Clear
                            </button>
                        )}

                    </div>
                    {showButtons && activeTab !== "ruku" && (
                        <div className=" grid grid-cols-2 gap-2 text-black font-semibold">
                            <button
                                onClick={() => {
                                    let newValue;

                                    if (activeTab === "aayah") {
                                        newValue = getPrevAyah(value);
                                    } else {
                                        newValue = Number(value) - 1;
                                    }

                                    if (!newValue) return;

                                    setValue(newValue);
                                    handleSearchWithValue(newValue);
                                }}
                                className="rounded-lg bg-yellow-400 hover:bg-yellow-500 h-10"
                            >
                                prev
                            </button>

                            <button
                                onClick={() => {
                                    let newValue;

                                    if (activeTab === "aayah") {
                                        newValue = getNextAyah(value);
                                    } else {
                                        newValue = Number(value) + 1;
                                    }

                                    if (!newValue) return;

                                    setValue(newValue);
                                    handleSearchWithValue(newValue);
                                }}
                                className="rounded-lg bg-yellow-400 hover:bg-yellow-500 h-10"
                            >
                                Next
                            </button>
                        </div>
                    )}

                    {/* Result */}
                    <div className="mt-5 border border-dashed border-gray-600 rounded-xl p-6 text-2xl sm:text-xl space-y-6">

                        {error && <p className="text-red-400">{error}</p>}

                        {/* Arabic */}
                        {result && activeTab === "aayah" && (
                            <p className="text-yellow-500 text-lg">{result.text}</p>
                        )}

                        {result && activeTab !== "aayah" && result.ayahs && (
                            <div className="space-y-2 max-h-60 overflow-y-auto">
                                {result.ayahs.map((ayah) => (
                                    <p key={ayah.number} className="text-yellow-500">
                                        {ayah.text}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* English */}
                        {englishResult && activeTab === "aayah" && (
                            <p className="text-gray-200">{englishResult.text}</p>
                        )}

                        {englishResult && activeTab !== "aayah" && englishResult.ayahs && (
                            <div className="space-y-2 max-h-60 overflow-y-auto">
                                {englishResult.ayahs.map((ayah) => (
                                    <p key={ayah.number} className="text-gray-200">
                                        {ayah.text}
                                    </p>
                                ))}
                            </div>
                        )}

                        {!result && !error && !loading && (
                            <p className="text-gray-400 text-center">
                                Enter a number above to see the result
                            </p>
                        )}
                    </div>



                </div>
            </motion.div>
        </motion.div>
    );
};

export default API;