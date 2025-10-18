export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <img 
          src="/headshot.jpg" 
          alt="Professional Headshot" 
          className="mx-auto rounded-full w-48 h-48 object-cover mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Jane Doe</h1>
        <p className="text-xl text-gray-600 mb-8">
          Full Stack Developer | Tech Innovator | Problem Solver
        </p>
        <div className="space-x-4">
          <a 
            href="/resume.pdf" 
            className="btn btn-primary"
            target="_blank"
          >
            View Resume
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}