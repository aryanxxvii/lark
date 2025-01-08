import React from 'react';
import { Link } from 'react-router-dom';
import { HiLightningBolt, HiClipboardCopy } from 'react-icons/hi';
import { BiBrain } from 'react-icons/bi';
import { IoStatsChart } from 'react-icons/io5';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../Layout/Navbar';

function Home() {
  const codeExample = `const response = await fetch('https://api.lark.ai/v1/lark', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: audioBase64
  })
});`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar showAuthButtons={true} />

      {/* Hero Section */}
      <div className="relative">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-muted/10 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent-muted/5 via-transparent to-transparent -z-10" />
        
        <main className="max-w-7xl mx-auto px-6">
          <div className="py-32 space-y-24">
            {/* Hero Content */}
            <div className="text-center space-y-4">
              <div className="inline-block">
                <a href="https://github.com/aryanxxvii/lark/tree/main" className="repo-badge">
                  <span className="w-1 h-1 rounded-full bg-accent mr-2" />
                  GitHub Repo
                </a>
              </div>
              
              <h1 className="text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent pr-2">Speech Analysis</span>
                <br />
                <span className="text-white">Made Simple</span>
              </h1>
              <div className="flex flex-col justify-center gap-2 py-6">
                <p className="text-md text-white/70 mx-auto">
                Designed to analyze and grade voice samples based on the pronunciation of words.
                </p>

                <p className="text-md text-white/70 mx-auto">
                  Perfect for language learning apps and speech assessment tools.
                </p>
              </div>
              <div className="flex justify-center gap-6">
                <Link to="/register" 
                      className="btn-dark text-lg px-8 py-3 group text-emerald-100">
                  Get API Key
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">
                    <FiArrowRight className="inline" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <HiLightningBolt className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Integration</h3>
                <p className="text-white/70">Simple REST API endpoint that integrates with your existing codebase.</p>
              </div>

              <div className="feature-card">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BiBrain className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">ML-Powered</h3>
                <p className="text-white/70">Advanced machine learning model for accurate pronunciation assessment.</p>
              </div>

              <div className="feature-card">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <IoStatsChart className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Detailed Analytics</h3>
                <p className="text-white/70">Get metrics like IELTS band score, similarity score, and transcription.</p>
              </div>
            </div>

            {/* Code Example */}
            <div className="code-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white font-instrument">Quick Integration</h3>
                <button 
                  onClick={() => navigator.clipboard.writeText(codeExample)}
                  className="text-xs text-white/50 hover:text-accent flex items-center gap-2 transition-colors"
                >
                  <HiClipboardCopy className="w-4 h-4" />
                  Copy code
                </button>
              </div>

              <div className="relative">
                <div className="absolute top-3 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                
                <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 pt-10 font-mono text-sm border border-border overflow-x-auto">
                  <code className="text-white/80 whitespace-pre-wrap">
                    <span className="text-accent">const</span>{" "}<span className="text-accent-hover">response</span> = <span className="text-accent">await</span> fetch(<span className="text-emerald-300">'https://api.lark.ai/v1/lark'</span>, {"{"}
{"\n"}{"    "}method: <span className="text-emerald-300">'POST'</span>,
{"\n"}{"    "}headers: {"{"}
{"\n"}{"        "}Authorization: <span className="text-emerald-300">'Bearer YOUR_API_KEY'</span>,
{"\n"}{"        "}'Content-Type': <span className="text-emerald-300">'application/json'</span>
{"\n"}{"    "}{"}"}, 
{"\n"}{"    "}body: <span className="text-accent">JSON</span>.stringify({"{"}
{"\n"}{"        "}data: <span className="text-white/60">audioBase64</span>
{"\n"}{"    "}{"}"})
{"\n"}{"}"});
                  </code>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-xs text-white/30">Response</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-4 mt-4 font-mono text-sm border border-border overflow-x-auto">
                <code className="text-white/80">
                  {"{"}
                  <br />
                  {"  "}"similarity_score": <span className="text-emerald-300">0.92</span>,
                  <br />
                  {"  "}"band": <span className="text-emerald-300">8</span>,
                  <br />
                  {"  "}"transcription": <span className="text-emerald-300">"FEAR IS THE MIND-KILLER"</span>,
                  <br />
                  {"}"}
                </code>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home; 