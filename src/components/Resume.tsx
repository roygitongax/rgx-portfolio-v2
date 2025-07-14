
import { GraduationCap, Award, Briefcase, Code, Phone, Mail, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const skills = [
    'Python', 'TypeScript', 'Power Fx', 'Figma', 'Photoshop', 
    'Sentinel', 'Defender for Cloud', 'Power Platform', 'Windows', 
    'Linux', 'Outlook', 'Teams', 'Word', 'Excel', 'UX Wireframing', 
    'Usability Testing'
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my education, experience, and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">BSc Information Technology</h3>
                    <p className="text-primary font-medium">KCA University</p>
                    <p className="text-muted-foreground">2021 – 2024</p>
                    <p className="text-sm text-muted-foreground mt-1">Upper Second Class Honors</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-sm px-3 py-1">SC-900</Badge>
                  <Badge variant="secondary" className="text-sm px-3 py-1">SC-200</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a href="tel:+1234567890" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+1 (234) 567-8900</span>
                  </a>
                  <a href="mailto:roy@example.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>roy@example.com</span>
                  </a>
                  <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4 mr-3" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4 mr-3" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="w-6 h-6 mr-3 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-semibold text-foreground">Intern</h3>
                    <p className="text-primary font-medium">NTT Data</p>
                    <p className="text-muted-foreground text-sm mb-2">Oct 2024 – Jan 2025</p>
                    <p className="text-muted-foreground">
                      Contributing to enterprise-level technology solutions and gaining hands-on experience 
                      in IT infrastructure and cybersecurity implementations.
                    </p>
                  </div>

                  <div className="border-l-2 border-muted pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                    <h3 className="text-xl font-semibold text-foreground">Intern</h3>
                    <p className="text-primary font-medium">National Youth Service</p>
                    <p className="text-muted-foreground text-sm mb-2">Aug 2024 – Oct 2024</p>
                    <p className="text-muted-foreground">
                      Participated in national service programs while developing technical skills 
                      and contributing to community development initiatives.
                    </p>
                  </div>

                  <div className="border-l-2 border-muted pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                    <h3 className="text-xl font-semibold text-foreground">Team Lead</h3>
                    <p className="text-primary font-medium">JM Associates</p>
                    <p className="text-muted-foreground text-sm mb-2">Nov 2020 – Oct 2022</p>
                    <p className="text-muted-foreground">
                      Led cross-functional teams in project delivery, managed client relationships, 
                      and coordinated technical implementations across multiple business domains.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Code className="w-6 h-6 mr-3 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
