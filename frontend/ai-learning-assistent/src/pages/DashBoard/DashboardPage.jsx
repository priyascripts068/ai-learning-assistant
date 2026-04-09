import React, { useState, useEffect } from "react";
import Spinner from "../../components/common/Spinner";
import progressService from "../../services/progressService";
import toast from "react-hot-toast";
import { FileText, BookOpen, BrainCircuit, Clock } from "lucide-react";

const DashboardPage = () => {

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await progressService.getDashboardData();
        console.log(data);
        setDashboardData(data.data);
      } catch (error) {
        toast.error("Failed to fetch dashboard data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <Spinner />;

  if (!dashboardData || !dashboardData.overview) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No dashboard data available.</p>
      </div>
    );
  }

  const stats = [
    {
      label: "TOTAL DOCUMENTS",
      value: dashboardData.overview.totalDocuments,
      icon: FileText,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      label: "TOTAL FLASHCARDS",
      value: dashboardData.overview.totalFlashcards,
      icon: BookOpen,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      label: "TOTAL QUIZZES",
      value: dashboardData.overview.totalQuizzes,
      icon: BrainCircuit,
      gradient: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen relative">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>

      <div className="max-w-7xl mx-auto p-6 relative z-10">

        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Track your learning progress and activity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >

                <div className="flex items-center justify-between mb-4">

                  <span className="text-xs font-semibold text-slate-500">
                    {stat.label}
                  </span>

                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                </div>

                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>

              </div>
            );

          })}

        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-slate-500"/>
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Activity
            </h2>
          </div>

          {dashboardData.recentActivity ? (

            <div className="space-y-4">

              {[
                ...(dashboardData.recentActivity.documents || []).map(doc => ({
                  id: doc._id,
                  description: doc.title,
                  timestamp: doc.lastAccessed,
                  link: `/documents/${doc._id}`,
                  type: "document",
                })),

                ...(dashboardData.recentActivity.quizzes || []).map(quiz => ({
                  id: quiz._id,
                  description: quiz.title,
                  timestamp: quiz.lastAttempted,
                  link: `/quizzes/${quiz._id}`,
                  type: "quiz",
                })),
              ]
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                .map((activity, index) => (

                  <div
                    key={activity.id || index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >

                    <div>

                      <p className="text-sm font-medium text-slate-900">
                        {activity.type === "document"
                          ? "Accessed Document: "
                          : "Attempted Quiz: "}
                        {activity.description}
                      </p>

                      <p className="text-xs text-slate-500">
                        {new Date(activity.timestamp).toLocaleString()}
                      </p>

                    </div>

                    <a
                      href={activity.link}
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      View
                    </a>

                  </div>

                ))}

            </div>

          ) : (

            <div className="text-center py-12 text-slate-400">
              No recent activity yet.
            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;