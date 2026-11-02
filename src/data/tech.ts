/**
 * Technology registry. Every tag on the site is looked up here, so a logo is
 * added once and appears everywhere. Names without an entry render as plain text
 * (concepts such as "Quality gates" have no logo by design).
 *
 * To add a logo: drop the official SVG into public/tech/ and add a line below.
 */
const LOGOS: Record<string, string> = {
  'GitLab CI/CD': 'gitlab',
  'Container Registry': 'gitlab',
  GitLab: 'gitlab',
  'GitHub Actions': 'github-actions',
  'SonarCloud / SonarQube': 'sonarqube',
  SonarCloud: 'sonarqube',
  Trivy: 'trivy',
  Docker: 'docker',
  'Docker Compose': 'docker',
  Kubernetes: 'kubernetes',
  nginx: 'nginx',
  AWS: 'aws',
  'AWS Lambda': 'aws-lambda',
  'API Gateway': 'api-gateway',
  DynamoDB: 'dynamodb',
  KMS: 'kms',
  IAM: 'iam',
  CloudWatch: 'cloudwatch',
  SNS: 'sns',
  Terraform: 'terraform',
  Azure: 'azure',
  Prometheus: 'prometheus',
  Alertmanager: 'prometheus',
  Grafana: 'grafana',
  'JUnit 5': 'junit',
  Vitest: 'vitest',
  ESLint: 'eslint',
  Java: 'java',
  'Spring Boot': 'spring-boot',
  Python: 'python',
  'Python 3': 'python',
  React: 'react',
  'React 18': 'react',
  'C / C++': 'cplusplus',
  MySQL: 'mysql',
  Oracle: 'oracle',
  'Oracle DB': 'oracle',
  Flyway: 'flyway',
  Linux: 'linux',
  Bash: 'bash',
  Git: 'git',
  'Routing & switching': 'cisco',
  MQTT: 'mqtt',
  ESP32: 'espressif',
  Vite: 'vite',
  'Tailwind CSS': 'tailwindcss',
  Netlify: 'netlify',
};

export function logoFor(name: string): string | null {
  const file = LOGOS[name];
  return file ? `/tech/${file}.svg` : null;
}
