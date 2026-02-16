'use client';

import React from 'react';

const YouTubeVideo = () => {
  const videoId = 'CV08TgRVNT8';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&end=34`;

  return (
    <iframe
      className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
      style={{ minWidth: '177.77vh', minHeight: '100vw' }} // Maintain 16:9 aspect ratio
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default function AboutPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
        <YouTubeVideo />
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 -z-10" />

      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
              About SMeH
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                The School of Media and Humanities (SMeH) at Manav Rachna International Institute of
                Research and Studies (MRIIRS) is a dynamic academic unit committed to excellence in media
                education, research, and industry engagement. The Department of Journalism and Mass
                Communication under SMeH aims to nurture skilled media professionals equipped with critical
                thinking, ethical grounding, and practical expertise to meet the evolving demands of the media
                and communication industry.
              </p>
              <p>
                The department offers a comprehensive curriculum that blends theoretical foundations with
                hands-on training in journalism, digital media, advertising, public relations, film and television
                production, photography, podcasting, and multimedia storytelling. Emphasis is placed on
                experiential learning through studio-based practice, fieldwork, live projects, internships,
                industrial visits, and collaborations with leading media organizations.
              </p>
              <p>
                SMeH is supported by state-of-the-art infrastructure, including newsrooms, audio-visual studios,
                editing suites, photography labs, and digital media facilities that simulate real-world professional
                environments. The department actively promotes innovation, creativity, and research through
                seminars, workshops, guest lectures, media conclaves, and faculty-student research initiatives.
              </p>
              <p>
                With a strong focus on industry integration, ethical journalism, and emerging media
                technologies, the Department of Journalism and Mass Communication at SMeH, MRIIRS strives
                to develop socially responsible communicators, storytellers, and media leaders who can
                contribute meaningfully to society and the global media landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
