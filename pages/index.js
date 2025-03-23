import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Head>
        {/* ✅ SEO Optimized Meta Tags */}
        <title>Alirex University - Best Online Courses</title>
        <meta name="description" content="Learn from the best courses at Alirex University. Join now and start learning today!" />
        <meta name="keywords" content="online courses, Alirex University, digital learning, best courses" />
        <meta name="author" content="Alirex University" />
        <meta property="og:title" content="Alirex University - Best Online Courses" />
        <meta property="og:description" content="Join Alirex University and start learning from top instructors!" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://alirex.university" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl font-bold text-yellow-500">Welcome to Alirex University</h1>
      <p className="text-lg text-gray-300 mt-4">The best digital courses available online.</p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition">
        Get Started
      </button>
    </div>
  );
}
