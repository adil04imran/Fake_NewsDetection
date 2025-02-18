import React, { useState } from 'react';
import { Brain, Check, AlertTriangle, Github, Terminal, Database, Server } from 'lucide-react';

function App() {
  const [newsText, setNewsText] = useState('');
  const [result, setResult] = useState<null | { isFake: boolean; confidence: number }>(null);

  const analyzeText = () => {
    // Simulate ML prediction
    const randomConfidence = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
    setResult({
      isFake: randomConfidence > 0.7,
      confidence: randomConfidence
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Brain className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fake News Detection
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Powered by Machine Learning and Natural Language Processing
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Demo Section */}
        <section className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 shadow-xl mb-16">
          <h2 className="text-2xl font-semibold mb-4">Try it yourself</h2>
          <textarea
            className="w-full h-32 p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste news article text here..."
            value={newsText}
            onChange={(e) => setNewsText(e.target.value)}
          />
          <button
            onClick={analyzeText}
            disabled={!newsText}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Analyze Text
          </button>

          {result && (
            <div className="mt-6 p-4 rounded-lg bg-gray-700">
              <div className="flex items-center gap-2 mb-2">
                {result.isFake ? (
                  <AlertTriangle className="text-red-400 w-6 h-6" />
                ) : (
                  <Check className="text-green-400 w-6 h-6" />
                )}
                <h3 className="text-xl font-semibold">
                  {result.isFake ? 'Potentially Fake News' : 'Likely Genuine News'}
                </h3>
              </div>
              <div className="bg-gray-600 rounded-full h-4 mt-2">
                <div
                  className={`h-full rounded-full ${
                    result.isFake ? 'bg-red-400' : 'bg-green-400'
                  }`}
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Confidence: {(result.confidence * 100).toFixed(1)}%
              </p>
            </div>
          )}
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Terminal className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">ML/NLP Stack</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Logistic Regression</li>
                <li>• TF-IDF Vectorization</li>
                <li>• LSTM Neural Networks</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Libraries Used</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• NLTK</li>
                <li>• Scikit-learn</li>
                <li>• TensorFlow</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Server className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Flask Backend</li>
                <li>• Streamlit Dashboard</li>
                <li>• RESTful API</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-700">
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;