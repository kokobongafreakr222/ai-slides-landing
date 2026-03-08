import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { IconClock, IconDollar, IconLayout, IconUsers } from '@/components/icons';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ProblemCard({ icon, title, description, index }: ProblemCardProps) {
  return (
    <FadeIn delay={index}>
      <Card variant="default" padding="lg" className="h-full">
        <div className="flex flex-col gap-4">
          <div className="text-accent w-6 h-6">{icon}</div>
          <h3 className="text-text font-semibold text-xl leading-snug">
            {title}
          </h3>
          <p className="text-text-muted text-base leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </FadeIn>
  );
}

export default function Problem() {
  return (
    <section
      id="problem"
      className="bg-bg-alt section-glow"
      style={{
        paddingBlock: 'var(--spacing-section)',
      }}
    >
      <div className="container">
        <FadeIn>
          <SectionHeader
            title="Вы знаете, что хотите сказать. Слайды — отдельная история."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12">
          <ProblemCard
            icon={<IconClock size={24} />}
            title="PowerPoint отнимает часы."
            description="Выравнивание, шрифты, цвета — вы тратите время на технические детали, а не на смысл. Одна презентация — это 4–8 часов, которых больше нет."
            index={1}
          />
          <ProblemCard
            icon={<IconDollar size={24} />}
            title="Дизайнер — дорого и долго."
            description="От 10 000 ₽ за deck. Итерации — отдельно. И это ещё если дизайнер свободен и понял задачу с первого раза."
            index={2}
          />
          <ProblemCard
            icon={<IconLayout size={24} />}
            title="Шаблоны выглядят как шаблоны."
            description="Canva узнаётся с первого взгляда. Все эти готовые макеты выдают себя — и вашу аудиторию не обмануть."
            index={3}
          />
        </div>

        <FadeIn delay={4} className="mt-8">
          <Card variant="bordered" padding="lg">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-accent w-6 h-6">
                  <IconUsers size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-text font-semibold text-xl leading-snug mb-2">
                  Для агентств — отдельная история.
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  Каждый клиент требует свой стиль. Дизайнер — узкое горлышко всего процесса. Итерации в последний момент съедают маржу. Взять больше заказов без расширения штата — задача без решения. До этого.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
