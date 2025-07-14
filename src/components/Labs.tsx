
import { Shield, Search, Eye, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Labs = () => {
  const labs = [
    {
      title: "Microsoft Security & Compliance (SC-900)",
      icon: Shield,
      problem: "Understanding fundamental security, compliance, and identity concepts across Microsoft cloud services",
      approach: "Comprehensive study of security principles, identity management, threat protection, and compliance solutions",
      tools: ["Microsoft 365", "Azure AD", "Microsoft Defender", "Compliance Center"],
      lessons: [
        "Zero Trust security model implementation",
        "Identity and access management best practices",
        "Compliance and governance frameworks"
      ]
    },
    {
      title: "Microsoft Defender for Cloud",
      icon: Shield,
      problem: "Securing cloud workloads and implementing cloud security posture management",
      approach: "Hands-on configuration of security policies, threat detection, and vulnerability assessment in multi-cloud environments",
      tools: ["Azure Security Center", "Microsoft Defender for Cloud", "Azure Policy", "Security Recommendations"],
      lessons: [
        "Cloud Security Posture Management (CSPM)",
        "Cloud Workload Protection Platform (CWPP)",
        "Regulatory compliance assessment"
      ]
    },
    {
      title: "Microsoft Sentinel Detections (SC-200, 8 Modules)",
      icon: Eye,
      problem: "Building effective threat detection and response capabilities using SIEM/SOAR solutions",
      approach: "Developing custom analytics rules, creating workbooks, and implementing automated response playbooks",
      tools: ["Microsoft Sentinel", "KQL (Kusto Query Language)", "Logic Apps", "Threat Intelligence"],
      lessons: [
        "Advanced KQL query development",
        "Custom analytics rule creation",
        "SOAR playbook automation",
        "Threat intelligence integration"
      ]
    },
    {
      title: "Microsoft Sentinel Threat Hunting (SC-200, 4 Modules)",
      icon: Search,
      problem: "Proactive threat hunting to identify advanced persistent threats and suspicious activities",
      approach: "Utilizing hypothesis-driven hunting techniques and advanced analytics to uncover hidden threats",
      tools: ["Microsoft Sentinel", "Hunting Queries", "Notebooks", "MITRE ATT&CK Framework"],
      lessons: [
        "Hypothesis-driven threat hunting methodologies",
        "Advanced persistent threat (APT) identification",
        "MITRE ATT&CK framework application",
        "Threat landscape analysis"
      ]
    }
  ];

  return (
    <section id="labs" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Cybersecurity Labs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience with enterprise security solutions and threat detection methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, index) => {
            const IconComponent = lab.icon;
            return (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <IconComponent className="w-6 h-6 mr-3 text-primary" />
                    {lab.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Problem */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-destructive" />
                      Problem
                    </h4>
                    <p className="text-muted-foreground text-sm">{lab.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                    <p className="text-muted-foreground text-sm">{lab.approach}</p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Lessons */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Lessons</h4>
                    <ul className="space-y-1">
                      {lab.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="text-muted-foreground text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {lesson}
                        </li>
                      ))}
                    </ul>
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

export default Labs;
