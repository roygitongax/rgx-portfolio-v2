
import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "roygitongax@outlook.com",
      href: "mailto:roygitongax@outlook.com",
      description: "For professional inquiries and collaborations"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 769 873 257",
      href: "tel:+254769873257",
      description: "Available for direct conversations"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/roy-gitonga",
      href: "https://www.linkedin.com/in/roy-gitonga/",
      description: "Connect for professional networking"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/roygitongax",
      href: "https://github.com/roygitongax",
      description: "View my code repositories and contributions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities for collaboration in cybersecurity, IT infrastructure, or software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent className="w-5 h-5 mr-3 text-primary" />
                    {method.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary hover:text-primary/80 transition-colors font-medium block mb-2"
                  >
                    {method.value}
                  </a>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="hover-lift">
            <CardContent className="pt-8 pb-8">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Ready to Start a Conversation?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Whether you're looking for a technical architect, cybersecurity specialist, or innovation partner, 
                I'm excited to explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="apple-gradient hover:opacity-90 transition-opacity"
                  onClick={() => window.location.href = 'mailto:roygitongax@outlook.com?subject=Professional Inquiry'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.location.href = 'tel:+254769873257'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
