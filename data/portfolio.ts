export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  problem: string;
  approach: string;
  contribution: string;
  impact: string;
  learning: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  gallery: string[];
  accent: string;
  color: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  introduction: string;
  projects: Project[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface CredentialItem {
  title: string;
  institution: string;
  period: string;
  detail: string;
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  detail: string;
  href?: string;
}

export interface SystemHighlight {
  title: string;
  description: string;
  metric: string;
  tags: string[];
}

export const portfolioData: PortfolioData = {
  name: 'Ayushya Rao',
  title: 'Sr. Product Engineer',
  email: 'ayushya1997@gmail.com',
  introduction:
    'I build immersive systems where research, simulation, computer vision, and product engineering meet. My work turns difficult environments into practical training, analysis, and learning experiences.',
  projects: [
    {
      id: 'mahavitharan',
      title: 'Mahavitharan',
      role: 'Project Lead & Software Engineer',
      description: 'VR safety training for electrical workers using motion capture, haptics, and realistic substation simulations.',
      problem:
        'Electrical workers need repeated practice for dangerous substation procedures, but real high-voltage environments are too risky for early training.',
      approach:
        'We built a VR scene mirroring the substation layout, paired it with motion capture suits and haptic devices, and designed guided procedures for transformer coil replacement and jumper restringing.',
      contribution:
        'I led the project and coordinated a geographically distributed team while owning the software architecture, VR integration, simulation flow, and customer-facing iterations.',
      impact:
        'The training experience reduced injury risk by 41% and gave linemen a repeatable way to practice complex industrial procedures before entering the field.',
      learning:
        'This project sharpened my product leadership, customer communication, hardware-software planning, and ability to bring immersive technology to practical public infrastructure problems.',
      technologies: ['VR', 'Motion Capture', 'Haptic Feedback', 'Unity', '3D Modeling', 'C#'],
      metrics: [
        { label: 'Injury risk reduction', value: '41%' },
        { label: 'Team coordinated', value: '15+' },
      ],
      image: '../Images/mahavitran.png',
      gallery: [
        '../Images/mahavitran.png',
        '../Images/electricity-maintenance.png',
        '../Images/motion-capture-suit.png',
      ],
      accent: '#f59e0b',
      color: 'from-amber-500 to-cyan-500',
    },
    {
      id: '3d-reconstruction',
      title: 'Root-based 3D Reconstruction',
      role: 'Research Lead & Technical Engineer',
      description: 'AI pipeline for reconstructing multiple human poses in 3D from ordinary video.',
      problem:
        'Dynamic scenes with multiple humans are hard to recreate in 3D, limiting use cases in sports analytics, investigation, simulation, and replay.',
      approach:
        'We converted video into instance-level frames, clustered similar motion states, used CNN-based features and MocapNet, then rebuilt root-based humanoid motion in a virtual scene.',
      contribution:
        'I designed the research direction, implemented key parts of the technical pipeline, supervised benchmarking and data collection, and wrote the research paper.',
      impact:
        'The system successfully reconstructed multi-person motion in virtual environments and was evaluated with MPJPE on the H36M dataset.',
      learning:
        'The work deepened my research process, experimental design, literature review, and ability to convert a messy visual problem into measurable stages.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'MocapNet', 'Blender', 'Instance Segmentation', 'OpenCV'],
      metrics: [
        { label: 'Evaluation metric', value: 'MPJPE' },
        { label: 'Output', value: '3D pose' },
      ],
      image: '../Images/human-pose-reconstruction.png',
      gallery: [
        '../Images/human-pose-reconstruction.png',
        '../Images/pipeline.png',
        '../Images/pose-reconstruction.png',
        '../Images/statistics.png',
      ],
      accent: '#14b8a6',
      color: 'from-teal-400 to-blue-500',
    },
    {
      id: 'manav',
      title: 'Manav',
      role: 'Technical Lead & Product Engineer',
      description: 'Metahuman lip sync and emotional response system for expressive digital humans.',
      problem:
        'Digital humans often feel speechless, emotionless, and disconnected from natural communication, especially in real-time interaction contexts.',
      approach:
        'We combined speech processing, ASR, phoneme analysis, emotional state detection, and blend-shape manipulation to drive expressive metahuman faces.',
      contribution:
        'I shaped the communication pipeline, led implementation, improved load management, and helped the team move from slow conversion to real-time response.',
      impact:
        'The system reduced response time from 60 seconds to less than 1 second while preserving high-fidelity facial motion.',
      learning:
        'I learned how to scale a product from concept to usable system, balancing production constraints, model behavior, and user-facing responsiveness.',
      technologies: ['NLP', 'ASR', 'Phoneme Analysis', 'Blend Shapes', 'C++', 'AI/ML', 'Real-time Processing'],
      metrics: [
        { label: 'Response time', value: '60s -> <1s' },
        { label: 'Experience', value: 'Real time' },
      ],
      image: '../Images/manav.png',
      gallery: [
        '../Images/manav.png',
        '../Images/metahuman.png',
        '../Images/lip-syncing.png',
        '../Images/unreal-engine.png',
      ],
      accent: '#ec4899',
      color: 'from-pink-500 to-violet-500',
    },
    {
      id: 'schrodingers-cat',
      title: 'Schrodinger\'s Cat',
      role: 'Project Manager & Quantum Engineer',
      description: 'Interactive quantum computing simulation and education platform powered by real quantum circuits.',
      problem:
        'Quantum mechanics is difficult to explain through static diagrams, and students need a more intuitive way to interact with superposition, entanglement, and measurement.',
      approach:
        'We built an interactive simulation where users predict quantum states, then connected the learning flow to IBM Qiskit and real quantum circuit behavior.',
      contribution:
        'I managed the project, broke down tasks, integrated the quantum-computing layer, and helped translate abstract concepts into an accessible learning experience.',
      impact:
        'The online experiment educated 200+ students and received 90% positive responses from learners.',
      learning:
        'This strengthened my ability to simplify difficult science, design educational systems, and connect practical software interfaces to emerging computing platforms.',
      technologies: ['Quantum Computing', 'IBM Qiskit', 'Quantum Circuits', 'Python', 'Web Development', 'Education'],
      metrics: [
        { label: 'Students educated', value: '200+' },
        { label: 'Positive response', value: '90%' },
      ],
      image: '../Images/schrodingers-cat.png',
      gallery: [
        '../Images/schrodingers-cat.png',
        '../Images/live-quantum-circuit.png',
        '../Images/schrodingers-equation.png',
      ],
      accent: '#8b5cf6',
      color: 'from-violet-500 to-indigo-500',
    },
  ],
};

export const studyEntry = {
  id: 'industrial-error-processing',
  title: 'Error Processing in Industrial Environment',
  role: 'Research / Study Project',
  description: 'VR-based industrial safety and error processing study.',
  technologies: ['VR', 'Industrial Design', 'Human-Computer Interaction'],
  image: '/assets/portfolio/study-poster.png',
  color: 'from-rose-500 to-cyan-500',
};

export const experienceItems: ExperienceItem[] = [
  {
    role: 'Student Assistant - Data Driven Immersive Analytics Lab',
    company: 'Know-Center GmbH',
    location: 'Graz, Austria',
    period: 'Feb 2025 - Present',
    summary:
      'Researching BCI, neural signal processing, computer vision, and immersive analytics prototypes at the bridge between HCI research and public-facing demonstrations.',
    highlights: [
      'Developing computational pipelines for EEG and physiological data analysis in Python and MATLAB.',
      'Prototyping HCI and computer-vision systems that combine visual signals with BCI data.',
      'Presenting and maintaining VR headsets and technical prototypes for public research events such as Long Night of Research.',
    ],
    stack: ['BCI', 'EEG', 'Python', 'MATLAB', 'Computer Vision', 'Immersive Analytics'],
  },
  {
    role: 'AI Wearable Systems Developer',
    company: 'Lilli',
    location: 'Remote',
    period: 'Feb 2025 - Jun 2025',
    summary:
      'Built smart-glasses computer vision applications for real-time contextual scene understanding on edge hardware.',
    highlights: [
      'Developed visual analysis workflows on Brilliant Labs Frame hardware.',
      'Used multimodal video-processing pipelines and Gemini API integrations for real-time object and scene understanding.',
    ],
    stack: ['Smart Glasses', 'Gemini API', 'Edge AI', 'Computer Vision'],
  },
  {
    role: 'Senior Product Developer - AAA Games, Metaverse, Unity, Unreal',
    company: 'Tech Mahindra / Makers Lab',
    location: 'Pune, India',
    period: 'Oct 2022 - Dec 2024',
    summary:
      'Led and shipped AI, XR, metaverse, digital-human, automation, and geospatial simulation systems across research and production contexts.',
    highlights: [
      'Published a 3D pose reconstruction paper and built a motion-video-to-3D scene pipeline using Python, BVH, and Blender.',
      'Developed Metahuman lip-sync tooling with ASR, phoneme analysis, blend shapes, and Unreal Engine, cutting processing time by 60%.',
      'Built RAG conversational AI, Hindi LLM data pipelines, digital twin traffic monitoring, and automated game QA that reduced manual effort by 50%.',
    ],
    stack: ['Unity', 'Unreal Engine', 'Python', 'PyTorch', 'RAG', 'Weaviate', 'OpenGL', 'ArcGIS'],
  },
  {
    role: 'Software Development Lead - XR, Unity, Python',
    company: 'Holoworld Pvt. Ltd.',
    location: 'Mysore, India',
    period: 'Jun 2021 - Jul 2022',
    summary:
      'Led XR and AI product delivery for sports coaching, industrial safety, contextual support, and 3D scene-capture systems.',
    highlights: [
      'Led a remote sports coaching app with Mediapipe and TensorFlow pose estimation, contributing to 15% portfolio growth.',
      'Built the Mahavitharan electricity distribution simulator with Unity and motion capture suits, reducing maintenance-related accident risk by 41%.',
      'Delivered a Rasa, Knowledge Graph, and Haystack support chatbot that reduced support traffic by 20%.',
    ],
    stack: ['Unity', 'Python', 'Mediapipe', 'TensorFlow', 'Rasa', 'Haystack', 'LiDAR'],
  },
  {
    role: 'Business Analyst & XR Product Developer',
    company: 'HelloXR Pvt. Ltd. / Milieu BrandMethod',
    location: 'Bengaluru, India',
    period: 'Aug 2019 - Mar 2021',
    summary:
      'Translated client needs into AR product roadmaps, SaaS specifications, and interactive brand activations.',
    highlights: [
      'Built AR activation experiences for a major Australian sports league using Zapworks, TypeScript, AJAX, and MySQL.',
      'Increased website interaction by 25% through client-facing AR product delivery.',
      'Supported HelloAR SaaS roadmap definition and technical requirement translation.',
    ],
    stack: ['AR', 'TypeScript', 'JavaScript', 'Zapworks', 'MySQL', 'Product Analysis'],
  },
];

export const credentials: CredentialItem[] = [
  {
    title: 'MSc Information and Computer Engineering',
    institution: 'Technical University of Graz',
    period: 'Mar 2025 - Present',
    detail: 'Visual computing major with signal processing, BCI, cognitive neuroscience, image/video understanding, pattern recognition, and real-time graphics.',
  },
  {
    title: 'BTech Computer and Communication Engineering',
    institution: 'Manipal Academy of Higher Education',
    period: 'Jul 2015 - Dec 2019',
    detail: 'Focused on human-computer interaction and artificial intelligence; graduated first class.',
  },
];

export const publications: PublicationItem[] = [
  {
    title: 'Root based 3D Reconstruction of Multiple Human Pose',
    venue: 'CS & IT - CSCP 2024 / SIGL 2024',
    year: '2024',
    detail:
      'Co-authored paper proposing a pipeline from 2D pose images to 3D humanoids using instance segmentation, clustering, VGG16, MocapNet, BVH, and Blender.',
    href: 'https://aircconline.com/csit/abstract/v14n7/csit140705.html',
  },
  {
    title: 'Viewing on AR: EEG Responses to Incongruent Information with Real-World Context',
    venue: 'Ongoing research',
    year: '2025',
    detail:
      'Research direction exploring neural responses to visual misinformation in AR overlays using BCI systems.',
  },
];

export const systemHighlights: SystemHighlight[] = [
  {
    title: 'RAG Fintech AI Agent',
    description: 'Production conversational AI using LangChain-style retrieval, Zephyr 7B Beta, Weaviate, PgVector, and evaluation loops.',
    metric: '40% user satisfaction uplift',
    tags: ['LLM', 'RAG', 'Weaviate', 'Product AI'],
  },
  {
    title: 'Hindi LLM / Project Indus',
    description: 'Scoped 1.2B parameter model work with 22B tokens, 200GB multilingual data pipelines, QA benchmarks, and fine-tuning iterations.',
    metric: '200GB corpus pipeline',
    tags: ['PyTorch', 'CUDA', 'LLM', 'Data'],
  },
  {
    title: 'Digital Twin Traffic Monitoring',
    description: 'Unreal Engine geospatial application using ArcGIS and Blackshark.ai for real-time traffic control and monitoring.',
    metric: 'Real-time geospatial analysis',
    tags: ['Unreal', 'ArcGIS', 'Digital Twin'],
  },
  {
    title: 'Automated Game QA',
    description: 'OpenGL and OpenAI Gym based testing framework for game automation and visual QA.',
    metric: '50% manual QA reduction',
    tags: ['OpenGL', 'OpenAI Gym', 'Pygame'],
  },
];

export const skillClusters = [
  {
    title: 'AI & Applied ML',
    skills: ['PyTorch', 'TensorFlow', 'HuggingFace', 'OpenAI API', 'LangChain', 'RAG', 'Weaviate', 'Mediapipe'],
  },
  {
    title: 'XR & Spatial Computing',
    skills: ['Unity', 'Unreal Engine', 'Metahuman', 'OpenXR', 'Oculus', 'HoloLens', 'Zappar', 'Blender'],
  },
  {
    title: 'Computer Vision & Graphics',
    skills: ['OpenCV', 'SMPL', 'BVH', 'OpenGL', 'Vulkan', 'Three.js', 'LiDAR', 'Pyrender'],
  },
  {
    title: 'Engineering & Data',
    skills: ['Python', 'C#', 'C++', 'JavaScript', 'TypeScript', 'Docker', 'AWS', 'Django', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Research & Product',
    skills: ['BCI', 'EEG analysis', 'MATLAB', 'Signal processing', 'PRDs', 'Stakeholder alignment', 'Agile delivery'],
  },
];
