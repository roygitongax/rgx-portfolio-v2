
import { ExternalLink, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Business-Case Management App",
      client: "AAR Insurance",
      description: "Comprehensive case management system streamlining insurance claim processing and customer service operations.",
      image: "/placeholder.svg",
      technologies: ["Power Platform", "Power Apps", "Power Automate", "SharePoint"],
      features: [
        "Automated workflow management",
        "Real-time case tracking",
        "Customer portal integration",
        "Reporting and analytics dashboard"
      ],
      icon: Users
    },
    {
      title: "Process Digitization App",
      client: "Kenchic",
      description: "Digital transformation solution for poultry processing operations, improving efficiency and compliance tracking.",
      image: "/placeholder.svg",
      technologies: ["Low-Code Platform", "Power BI", "Azure", "SQL Database"],
      features: [
        "Production line monitoring",
        "Quality control workflows",
        "Inventory management",
        "Compliance reporting"
      ],
      icon: Zap
    },
    {
      title: "Asset Tagging Operations",
      client: "Quickmart",
      description: "Asset management system enabling efficient tracking and maintenance of retail equipment and infrastructure.",
      image: "/placeholder.svg",
      technologies: ["Power Platform", "QR Code Integration", "Mobile App", "Cloud Storage"],
      features: [
        "QR code-based asset tracking",
        "Mobile scanning capabilities",
        "Maintenance scheduling",
        "Asset lifecycle management"
      ],
      icon: Code
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions delivering business value through innovative technology implementations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="hover-lift h-full flex flex-col">
                <CardHeader>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-primary/40" />
                  </div>
                  
                  <CardTitle className="text-xl">
                    {project.title}
                  </CardTitle>
                  <p className="text-primary font-medium">{project.client}</p>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground text-xs flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => console.log(`View ${project.title} details`)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
