import React, { useState, useEffect } from "react";
import { CheckCircle, Search, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AiPrompt from "@/components/AiPrompt";
import { fetchProfile } from "@/lib/Data";

const ratings = [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
import problems from "./problems.json";

const CP = () => {
    const [profile, setProfile] = useState(null);
  const [selectedRating, setSelectedRating] = useState(800);
  const [solvedProblems, setSolvedProblems] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [problemsView, setProblemsView] = useState([]);

  useEffect(() => {
    fetchProfile().then((data) => {
      loadSolvedProblems(data.platforms.codeforces);
    });
  }, []);

  useEffect(() => {
    const filtered = problems.filter(
      (problem) => !selectedRating || problem.rating === selectedRating
    );
    setProblemsView(filtered);
  }, [selectedRating]);

  const loadSolvedProblems = async (handle) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://codeforces.com/api/user.status?handle=${handle.trim()}`
      );
      const data = await response.json();

      if (data.status === "OK") {
        const solvedSet = new Set();
        data.result.forEach((submission) => {
          if (submission.verdict === "OK") {
            solvedSet.add(
              `${submission.problem.contestId}${submission.problem.index}`
            );
          }
        });
        setSolvedProblems(solvedSet);
      } else {
        alert("Could not find user. Please check the handle and try again.");
      }
    } catch (error) {
      alert("Failed to fetch solved problems. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getRatingColor = (rating) => {
    if (rating <= 1000) return "text-green-700 bg-green-50 border-green-200";
    else if (rating <= 1400) return "text-blue-700 bg-blue-50 border-blue-200";
    else return "text-red-700 bg-red-50 border-red-200";
  };

  return (
      <>
      <Header title={"DSA Sheet"} subtitle={"Solve your next problem"}/>
      <div class="body problems">
        <div className="box cp-box mx-auto max-w-4xl">
            <div className="text-center mb-8">
                <h1 className="title text-slate-900 mb-2">
                    CP Sheet
                </h1>
                <p className="text-slate-600">
                    Track your progress through rated programming problems.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 justify-center ratings-tags">
                {ratings.map((rating) => (
                <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`tag ${selectedRating === rating ? "active" : ""}`}
                >
                    {rating}
                </button>
                ))}
            </div>

            <div className="space-y-3">
                {problemsView.map((problem) => {
                const problemId = `${problem.contestId}${problem.index}`;
                const isSolved = solvedProblems.has(problemId);

                return (
                    <div
                    key={problemId}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm 
                        border border-slate-200 hover:shadow-md transition-all group"
                    >
                    <div
                        className={`text-sm font-medium px-3 py-1 rounded-full border ${getRatingColor(
                        problem.rating
                        )}`}
                    >
                        {problem.rating}
                    </div>
                    <a
                        href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow ml-4 font-medium text-slate-900 group-hover:text-blue-600 transition-colors"
                    >
                        {problem.title}
                        <span className="ml-2 text-slate-500 text-sm">
                        ({problem.contestId}
                        {problem.index})
                        </span>
                    </a>
                    <div className="flex items-center gap-3 ml-4">
                        {isSolved && (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm border border-emerald-200">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Solved</span>
                        </div>
                        )}
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
      </div>
      <NavBar />
      <AiPrompt />
      </>
  );
};

export default CP;
