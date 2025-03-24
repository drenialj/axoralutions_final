import Link from 'next/link'

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-12">
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Zurück zur Startseite</Link>
        </nav>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend 
              den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, 
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese 
              Website besuchen.
            </p>

            <h2>3. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies. 
              Das sind kleine Textdateien, die Ihr Browser automatisch erstellt 
              und die auf Ihrem Endgerät gespeichert werden.
            </p>

            <h2>4. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, 
              werden Ihre Angaben aus dem Anfrageformular inklusive der von 
              Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            {/* Weitere Datenschutzinformationen hier */}
          </div>
        </div>
      </div>
    </main>
  )
} 