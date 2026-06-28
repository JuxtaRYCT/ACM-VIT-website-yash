export const RESEARCH_THEME_COLOR = "#135DE2";

export interface ResearchTool {
  name: string;
  slug: string;
  svgFile: string;
  colorHex: string;
  isDark?: boolean;
}

export interface ResearchAOI {
  key: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  cassetteSrc: string;
  tools: string[];
}

export const researchTools: ResearchTool[] = [
  { name: "Python", slug: "python", svgFile: "/domains/research/tools/python.svg", colorHex: "#3776AB" },
  { name: "PyTorch", slug: "pytorch", svgFile: "/domains/research/tools/pytorch.svg", colorHex: "#EE4C2C" },
  { name: "TensorFlow", slug: "tensorflow", svgFile: "/domains/research/tools/tensorflow.svg", colorHex: "#FF6F00" },
  { name: "Keras", slug: "keras", svgFile: "/domains/research/tools/keras.svg", colorHex: "#D00000", isDark: true },
  { name: "Hugging Face", slug: "huggingface", svgFile: "/domains/research/tools/huggingface.svg", colorHex: "#FFD21E", isDark: true },
  { name: "LangChain", slug: "langchain", svgFile: "/domains/research/tools/langchain.svg", colorHex: "#1C3C3C", isDark: true },
  { name: "Pandas", slug: "pandas", svgFile: "/domains/research/tools/pandas.svg", colorHex: "#150458", isDark: true },
  { name: "NumPy", slug: "numpy", svgFile: "/domains/research/tools/numpy.svg", colorHex: "#4DABCF", isDark: true },
  { name: "Scikit-learn", slug: "scikit-learn", svgFile: "/domains/research/tools/scikit-learn.svg", colorHex: "#F7931E", isDark: true },
  { name: "OpenCV", slug: "opencv", svgFile: "/domains/research/tools/opencv.svg", colorHex: "#5C3EE8", isDark: true },
  { name: "Jupyter", slug: "jupyter", svgFile: "/domains/research/tools/jupyter.svg", colorHex: "#F37626", isDark: true },
  { name: "Google Colab", slug: "google-colab", svgFile: "/domains/research/tools/google-colab.svg", colorHex: "#F9AB00" },
  { name: "Qiskit", slug: "qiskit", svgFile: "/domains/research/tools/qiskit.svg", colorHex: "#6929C4" },
  { name: "PennyLane", slug: "pennylane", svgFile: "/domains/research/tools/pennylane.svg", colorHex: "#33CCFF" },
  { name: "Solidity", slug: "solidity", svgFile: "/domains/research/tools/solidity.svg", colorHex: "#363636", isDark: true },
  { name: "Hardhat", slug: "hardhat", svgFile: "/domains/research/tools/hardhat.svg", colorHex: "#FFF100" },
  { name: "OpenZeppelin", slug: "openzeppelin", svgFile: "/domains/research/tools/openzeppelin.svg", colorHex: "#4E5EE4", isDark: true },
  { name: "Ethereum", slug: "ethereum", svgFile: "/domains/research/tools/ethereum.svg", colorHex: "#3C3C3D", isDark: true },
  { name: "IPFS", slug: "ipfs", svgFile: "/domains/research/tools/ipfs.svg", colorHex: "#65C2CB", isDark: true },
  { name: "Ghidra", slug: "ghidra", svgFile: "/domains/research/tools/ghidra.svg", colorHex: "#FF6900" },
  { name: "Burp Suite", slug: "burp-suite", svgFile: "/domains/research/tools/burp-suite.svg", colorHex: "#FF6633" },
  { name: "OWASP ZAP", slug: "owasp-zap", svgFile: "/domains/research/tools/owasp-zap.svg", colorHex: "#00549E" },
  { name: "Wireshark", slug: "wireshark", svgFile: "/domains/research/tools/wireshark.svg", colorHex: "#1679A7", isDark: true },
  { name: "Nmap", slug: "nmap", svgFile: "/domains/research/tools/nmap.svg", colorHex: "#88C040" },
  { name: "Metasploit", slug: "metasploit", svgFile: "/domains/research/tools/metasploit.svg", colorHex: "#2596CD", isDark: true },
  { name: "Kali Linux", slug: "kali-linux", svgFile: "/domains/research/tools/kali-linux.svg", colorHex: "#557C94", isDark: true },
  { name: "Node-RED", slug: "node-red", svgFile: "/domains/research/tools/node-red.svg", colorHex: "#8F0000", isDark: true },
  { name: "Arduino IDE", slug: "arduino", svgFile: "/domains/research/tools/arduino.svg", colorHex: "#00979D", isDark: true },
  { name: "PlatformIO", slug: "platformio", svgFile: "/domains/research/tools/platformio.svg", colorHex: "#F18A1F", isDark: true },
  { name: "ESP-IDF", slug: "esp-idf", svgFile: "/domains/research/tools/esp-idf.svg", colorHex: "#E7352C", isDark: true },
  { name: "TensorFlow Lite", slug: "tensorflow-lite", svgFile: "/domains/research/tools/tensorflow-lite.svg", colorHex: "#FF6F00" },
  { name: "MQTT", slug: "mqtt", svgFile: "/domains/research/tools/mqtt.svg", colorHex: "#660066", isDark: true },
  { name: "Raspberry Pi", slug: "raspberry-pi", svgFile: "/domains/research/tools/raspberry-pi.svg", colorHex: "#A22846", isDark: true },
  { name: "Biopython", slug: "biopython", svgFile: "/domains/research/tools/biopython.svg", colorHex: "#3776AB" },
  { name: "BLAST", slug: "blast", svgFile: "/domains/research/tools/blast.svg", colorHex: "#0F62FE" },
  { name: "Galaxy", slug: "galaxy", svgFile: "/domains/research/tools/galaxy.svg", colorHex: "#2C3143", isDark: true },
  { name: "LLVM", slug: "llvm", svgFile: "/domains/research/tools/llvm.svg", colorHex: "#262D3A", isDark: true },
  { name: "Docker", slug: "docker", svgFile: "/domains/research/tools/docker.svg", colorHex: "#2496ED", isDark: true },
  { name: "Linux", slug: "linux", svgFile: "/domains/research/tools/linux.svg", colorHex: "#FCC624", isDark: true },
  { name: "Git", slug: "git", svgFile: "/domains/research/tools/git.svg", colorHex: "#F05032", isDark: true },
];

export const researchAOIs: ResearchAOI[] = [
  {
    key: "aiml",
    title: "AI / ML",
    shortDescription: "Building intelligent systems, from classical machine learning models to large language model pipelines and agentic workflows.",
    longDescription: [
      "Students in the AI/ML AOI work across computer vision, natural language processing, reinforcement learning, and agent orchestration, turning paper ideas into working systems.",
      "Alongside individual research, members build projects in the field and ship them, from training pipelines and inference servers to full applications powered by modern ML.",
    ],
    cassetteSrc: "/aois/research/cassettes/aiml.png",
    tools: ["python", "pytorch", "tensorflow", "keras", "huggingface", "langchain", "scikit-learn", "numpy", "pandas", "opencv", "jupyter", "google-colab"],
  },
  {
    key: "cybersecurity",
    title: "Cybersecurity",
    shortDescription: "Reverse engineering, web exploitation, network forensics and the offensive security skills behind India's top CTF team.",
    longDescription: [
      "The Cybersecurity AOI is home to z0d1ak, ACM-VIT's competitive CTF squad and currently India's number one ranked team and seventh in the world.",
      "Members do focused research across binary exploitation, web security, cryptography, and network defense, and turn that work into projects, writeups, and tools.",
    ],
    cassetteSrc: "/aois/research/cassettes/cybersecurity.png",
    tools: ["ghidra", "burp-suite", "owasp-zap", "wireshark", "nmap", "metasploit", "kali-linux", "python", "linux"],
  },
  {
    key: "iot",
    title: "IoT",
    shortDescription: "Connecting hardware to the cloud, prototyping smart devices and edge AI systems that live in the physical world.",
    longDescription: [
      "The IoT AOI works at the intersection of embedded systems, sensor networks, and cloud platforms, from low-power microcontroller design to edge ML deployment.",
      "Members prototype end-to-end systems, sensors talking to gateways, gateways talking to the cloud, and dashboards that actually do something useful with the data.",
    ],
    cassetteSrc: "/aois/research/cassettes/iot.png",
    tools: ["arduino", "platformio", "esp-idf", "node-red", "mqtt", "raspberry-pi", "python", "tensorflow-lite", "linux"],
  },
  {
    key: "blockchain",
    title: "Blockchain",
    shortDescription: "Smart contracts, decentralized applications, and the cryptographic primitives behind modern Web3 systems.",
    longDescription: [
      "The Blockchain AOI studies consensus protocols, zero-knowledge systems, and smart contract security, then puts that into practice through audits and projects.",
      "Members build dApps, write contracts, and experiment with new chains and toolchains, turning theory into deployed code.",
    ],
    cassetteSrc: "/aois/research/cassettes/blockchain.png",
    tools: ["solidity", "hardhat", "openzeppelin", "ethereum", "ipfs", "python"],
  },
  {
    key: "quantum",
    title: "Quantum Computing",
    shortDescription: "Quantum algorithms, circuit design, and the rapidly evolving stack behind near-term quantum hardware.",
    longDescription: [
      "The Quantum AOI explores quantum algorithms, error correction, and variational methods through hands-on circuit experiments and paper deep-dives.",
      "Members build projects using real quantum simulators and cloud hardware, bridging theoretical physics with practical engineering.",
    ],
    cassetteSrc: "/aois/research/cassettes/quantum.png",
    tools: ["qiskit", "pennylane", "python", "numpy"],
  },
  {
    key: "bioinformatics",
    title: "Bioinformatics",
    shortDescription: "Computation meets biology, from genomic sequence analysis to machine learning on biological data.",
    longDescription: [
      "The Bioinformatics AOI works on sequence alignment, structural biology, and ML pipelines applied to biological datasets.",
      "Members build tools for genomic data processing and collaborate on research projects that sit at the boundary of life sciences and computer science.",
    ],
    cassetteSrc: "/aois/research/cassettes/bioinformatics.png",
    tools: ["biopython", "blast", "galaxy", "python", "pandas", "numpy"],
  },
];

export const researchDescription = [
  "Research is the oldest research domain at VIT and the largest research domain on campus, a community of students who treat curiosity as a discipline. We work across six areas of interest, AI/ML, Cybersecurity, Bioinformatics, IoT, Blockchain and Quantum Computing, and we are the ones who keep the chapter plugged into whatever new field of study is taking shape.",
  "The whole domain runs System's Reading Groups on a regular cadence, peer-led deep dives into landmark papers and emerging topics across every AOI. These sessions are open to anyone who wants to sit in, regardless of domain or experience level. Beyond the reading groups, members do original research, ship projects, and pull the rest of the chapter into whatever interesting rabbit hole is opening up next.",
];

export const researchStats = [
  { value: "6", label: "AOIs" },
  { value: "Oldest", label: "Research Domain at VIT" },
];

export const researchFooterMessage = "Curiosity is a craft. Now go ask a better question.";
