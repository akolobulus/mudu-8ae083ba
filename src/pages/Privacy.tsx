import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-serif">Mudu Privacy Policy</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Who we are?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Welcome to <strong>Mudu</strong>. Mudu owns the website under the domain <a href="https://mudu.vercel.app" className="text-primary hover:underline">www.mudu.com</a> (the "Website"). Through the Website, as well as through a mobile application available on <strong>WhatsApp</strong> (the "App"), we provide market intelligence services (the "Service") powered by artificial intelligence and real-time data from verified market sources. <strong>Mudu</strong> acts as the controller of any personal data collected and processed in connection with your use of the Website and the App.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The main goal of this privacy policy is to inform you how and for what purpose we process personal data in connection with your visit to, and use of, the Website and the App.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Why we collect and process data</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect and process your data to securely provide you with the Services. Additionally, we process data to ensure and improve the functioning of the market intelligence algorithms. We collect your personal data when you voluntarily communicate with us via WhatsApp or leave feedback regarding our Service. We also process technical data to increase security against automated threats.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">What data we collect and process</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The types of information we collect depend on how you interact with <strong>Mudu</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Communication Data:</strong> When you contact us or send voice notes in local dialects (Yoruba, Pidgin, English) for price verification.</li>
            <li><strong>Usage Data:</strong> When you browse the Website or use the WhatsApp bot.</li>
            <li><strong>Feedback:</strong> When you decide to share your experience with our market insights.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Your data will be processed only as long as necessary to fulfill the purpose of providing accurate market intelligence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Market Intelligence & AI Processing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you use our Services, we collect information regarding food pricing, market locations, and shopping behaviors.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Voice Transcription:</strong> Our AI analyzes your voice notes to understand market needs.</li>
            <li><strong>Anonymization:</strong> Price data is combined with a unique identifier to obtain statistical insights, allowing us to improve our "True Price" maps.</li>
            <li><strong>Location Data:</strong> We process region-of-residence information (e.g., Ajegunle) to provide localized price alerts.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strive to protect your personal data from loss or unauthorized access through appropriate technical measures. For security reasons, we collect IP addresses for a period of 30 days to protect the App from fraud and abuse. Authentication data for premium services is processed for no longer than 90 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Your rights concerning data</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">You have the following rights under Nigerian data protection laws:</p>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li><strong>Right to Access:</strong> Request a copy of the data we hold about you.</li>
            <li><strong>Right to Rectify:</strong> Correct inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure:</strong> Request the deletion of your data.</li>
            <li><strong>Right to Object:</strong> Object to our processing of your personal data.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time.</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mt-4">
            To exercise these rights, you may send a request to <a href="mailto:officialarikpa@gmail.com" className="text-primary hover:underline">officialarikpa@gmail.com</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Automated Decision Making (Profiling)</h2>
          <p className="text-muted-foreground leading-relaxed">
            You use the App thanks to our intelligent algorithm, which analyzes your queries and voice notes to provide potential market prices. This automated analysis is the essence of the service. These analyses do not produce legal effects on you but are used to ensure the accuracy and fairness of market transactions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Amendments</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may revise this privacy policy from time to time. The most recent version will govern our use of your personal data and will be posted on the Website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 font-serif">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            You can reach us via e-mail: <a href="mailto:officialarikpa@gmail.com" className="text-primary hover:underline">officialarikpa@gmail.com</a>
          </p>
        </section>

        <p className="text-sm text-muted-foreground mt-12 border-t border-border pt-6"><strong>Last update:</strong> March 3, 2026.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
