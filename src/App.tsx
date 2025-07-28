import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, GraduationCap, Scale, Heart, Calendar, MapPin, Phone, Mail, Instagram, MessageCircle, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    {
      icon: Shield,
      title: "Segurança Pública",
      description: "Mais do que prometer, Daniel viveu a segurança pública: foi agente e delegado. Agora, quer levar sua experiência para criar políticas mais firmes e humanas.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Educação com Futuro",
      description: "Professor em diversas instituições e servidor do ensino público. Acredita que transformar o Brasil começa pela sala de aula, com respeito ao professor e acesso de verdade ao aluno.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Scale,
      title: "Justiça para todos",
      description: "Analista processual, assessor jurídico, advogado e defensor da OAB. Daniel conhece o sistema por dentro e luta para que ele funcione para o cidadão comum, com menos burocracia e mais equidade.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Representatividade de verdade",
      description: "Filho da terra, amigo do povo e próximo da realidade. Daniel acredita que política se faz com escuta ativa e presença. A voz de Roraima vai ecoar em Brasília.",
      color: "from-green-500 to-teal-600"
    }
  ];

  const timeline = [
    {
      year: "2026",
      title: "Pré-candidato a Deputado Federal",
      description: "Coloca seu nome à disposição de Roraima para levar experiência, ética e compromisso ao Congresso Nacional."
    },
    {
      year: "2022 - Atual",
      title: "Professor de Língua Portuguesa",
      description: "Servidor público estadual, atuando na base da formação educacional e valorizando o ensino como ferramenta de transformação."
    },
    {
      year: "2021 - Atual",
      title: "Advogado e Membro da OAB-RR",
      description: "Atuação firme na advocacia, com defesa da cidadania, direitos humanos e fortalecimento das instituições."
    },
    {
      year: "2014 - 2017",
      title: "Delegado de Polícia Civil (AM)",
      description: "Experiência de campo na segurança pública, liderando investigações e protegendo vidas com firmeza e justiça."
    },
    {
      year: "2009 - 2021",
      title: "Analista Processual - TJRR",
      description: "Mais de uma década atuando no Judiciário, com domínio técnico e compromisso com a justiça."
    },
    {
      year: "2008 - 2013",
      title: "Professor Universitário",
      description: "Docente em instituições como Faculdade Cathedral, Univirr e FAR — formando gerações com conhecimento e valores."
    },
    {
      year: "2004 - 2009",
      title: "Agente da Polícia Civil (RR)",
      description: "Início da jornada na segurança pública, vivenciando a realidade da rua e os desafios do cidadão comum."
    }
  ];

  const galleryImages = [
    "/src/images/Daniel-Cadeira-Entrevistas.jpg",
    "/src/images/Daniel-Foto-Profissional.jpg",
    "/src/images/Daniel-Rodrigo.jpg",
    "/src/images/Daniel-Com-Amigos-Canta.jpg"
  ];

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-2xl font-bold text-white">Daniel Trindade</span>
              <img 
                src="/src/images/Bandeira-Roraima.png" 
                alt="Bandeira de Roraima" 
                className="w-9 h-6 md:w-11 md:h-7 object-contain rounded-sm"
              />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-amber-400 transition-colors duration-200 font-medium">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-amber-400 transition-colors duration-200 font-medium">Quem é Daniel</button>
                <button onClick={() => scrollToSection('propostas')} className="text-white hover:text-amber-400 transition-colors duration-200 font-medium">Propostas</button>
                <button onClick={() => scrollToSection('trajetoria')} className="text-white hover:text-amber-400 transition-colors duration-200 font-medium">Trajetória</button>
                <button onClick={() => scrollToSection('contato')} className="text-white hover:text-amber-400 transition-colors duration-200 font-medium">Contato</button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-amber-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-white hover:text-amber-400 font-medium">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-white hover:text-amber-400 font-medium">Quem é Daniel</button>
              <button onClick={() => scrollToSection('propostas')} className="block px-3 py-2 text-white hover:text-amber-400 font-medium">Propostas</button>
              <button onClick={() => scrollToSection('trajetoria')} className="block px-3 py-2 text-white hover:text-amber-400 font-medium">Trajetória</button>
              <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-white hover:text-amber-400 font-medium">Contato</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fundo degradê animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-amber-600 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <div className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              <span>Daniel Trindade</span>
            </div>
            <span className="block text-3xl md:text-5xl mt-4 text-white/90">
              Candidato à Deputado Federal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-light max-w-3xl mx-auto">
            Experiência, dedicação e compromisso com o povo. 
            <br />
            <span className="text-amber-400 font-semibold">Delegado • Professor • Advogado</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Conheça Daniel
            </button>
            <button 
              onClick={() => scrollToSection('propostas')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Ver Propostas
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/80" />
        </div>
      </section>

      {/* Quem é Daniel */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img 
                  src="/src/images/Daniel-Foto-Profissional.jpg" 
                  alt="Daniel Trindade" 
                  className="w-full aspect-[3/4] object-cover object-top rounded-xl"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Conheça
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Daniel Trindade
                </span>
              </h2>
              
              <div className="text-lg text-slate-700 space-y-4 leading-relaxed">
                <p>
                  Com uma trajetória marcada pela dedicação ao serviço público, Daniel Trindade reúne a experiência de 
                  <span className="font-bold text-blue-600"> Delegado de Polícia (AM)</span>, a sabedoria de 
                  <span className="font-bold text-purple-600"> Professor Universitário (UFRR)</span> e a expertise de 
                  <span className="font-bold text-amber-600"> Direito</span>.
                </p>
                
                <p>
                 A missão de Daniel Trindade é clara e firme: representar o povo com transparência, responsabilidade e ação concreta.
                 Ele acredita que a política deve ser um instrumento real de transformação social, promoção da justiça e desenvolvimento sustentável — com foco nas pessoas e respeito ao futuro.
                </p>
                
                <p className="text-slate-600 italic">
                  "Minha trajetória na segurança pública, na educação e no direito me fortaleceu para servir com responsabilidade, coragem e voz ativa. Estou preparado para representar o povo com seriedade e compromisso real."
                  — Daniel Trindade
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Delegado</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">Professor</span>
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">Advogado</span>
                <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 text-white px-4 py-2 rounded-full font-semibold shadow-md">Mestre em Direito</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">Deputado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propostas/Pilares */}
      <section id="propostas" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Nossos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2">
                Pilares
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Quatro pilares fundamentais que norteiam nossa atuação política e nosso compromisso com a sociedade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <pillar.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-200">
                  {pillar.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="trajetoria" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Minha
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                Trajetória
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Uma caminhada de experiências e conquistas que moldaram nossa visão política e social.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar size={20} className="text-blue-600" />
                        <span className="text-2xl font-black text-blue-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-700">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Filie-se ao
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2">
              PRD RR
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Daniel Trindade é presidente do PRD-RR e convida você a fazer parte dessa mudança. Afilie-se ao partido e venha construir um Roraima mais justo!
          </p>
        </div>

        {/* Player de vídeo com mute por padrão */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[360px] md:max-w-xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <video
              id="videoPRD"
              src="/src/images/Video-PRD.mp4"
              muted
              loop
              playsInline
              className="w-full h-auto rounded-xl cursor-pointer"
              onClick={() => {
                const video = document.getElementById('videoPRD') as HTMLVideoElement;
                if (video.paused) {
                  video.play();
                  document.getElementById('playOverlay')?.classList.add('hidden');
                } else {
                  video.pause();
                }
              }}
            >
              Seu navegador não suporta reprodução de vídeo.
            </video>

            {/* Fade preto de baixo pra cima */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10 rounded-b-xl" />

            {/* Mensagem: Clique para ver o vídeo */}
            <div
              id="playOverlay"
              className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 text-white text-lg font-semibold backdrop-blur-sm cursor-pointer"
              onClick={() => {
                const video = document.getElementById('videoPRD') as HTMLVideoElement;
                video.play();
                document.getElementById('playOverlay')?.classList.add('hidden');
              }}
            >
              Clique para ver o vídeo
            </div>

            {/* Botão de som */}
            <button
              onClick={() => {
                const video = document.getElementById('videoPRD') as HTMLVideoElement;
                video.muted = !video.muted;
                const btn = document.getElementById('muteBtn');
                if (btn) btn.innerText = video.muted ? 'Som Off' : 'Som On';
              }}
              id="muteBtn"
              className="absolute bottom-4 right-4 z-30 bg-white/80 hover:bg-white text-slate-900 font-bold px-4 py-1 rounded-full text-sm shadow-md transition"
            >
              Som Off
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/reel/DMqHHoEOzwD/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg"
          >
            Ver no Instagram
          </a>
        </div>
      </section>

      {/* Ultimas postagens do instagram */}
      <section id="instagram" className="relative py-20 bg-gradient-to-br from-white to-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Últimas do
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Instagram
            </span>
          </h2>
          <p className="text-xl text-slate-700">
            Acompanhe os bastidores e os momentos mais recentes do nosso dia a dia.
          </p>
        </div>

        {/* Wrapper Instagram Feed com degradê inferior */}
        <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          {/* Iframe do Instagram */}
          <iframe 
            src="https://www.instagram.com/danielptrindade/embed" 
            width="100%" 
            height="600" 
            allowTransparency={true}
            frameBorder="0" 
            scrolling="no"
            className="w-full h-[600px] bg-white"
          ></iframe>

          {/* Degradê branco de baixo pra cima */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Botão para abrir perfil no app/navegador */}
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/danielptrindade/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg"
          >
            Abrir no Instagram
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Entre em
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                Contato
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Sua opinião é fundamental. Entre em contato e participe da construção de um futuro melhor.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Endereço</h3>
                    <p className="text-slate-600">Av. Benjamin Constant, 1735 - Centro, Boa Vista - RR,</p>
                    <p className="text-slate-600">CEP 69.301-072</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
                    <p className="text-slate-600">(95) 99999-9999</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">E-mail</h3>
                    <p className="text-slate-600">contato@danieltrindaderr.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Mensagem</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Daniel Trindade</h3>
            <p className="text-white/80 mb-8">Delegado • Professor • Advogado</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.instagram.com/danielptrindade/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/5595991545651" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                <MessageCircle size={24} />
              </a>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60">© Daniel Trindade | Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Social Buttons */}
      <div className="fixed right-6 bottom-6 space-y-4 z-40">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/5595991545651" target="_blank" rel="noopener noreferrer"
          className="block bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 text-white"
        >
          <MessageCircle size={24} />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/danielptrindade/" target="_blank" rel="noopener noreferrer"
          className="block bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 text-white"
        >
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;