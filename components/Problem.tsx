import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { IconClock, IconDollar, IconLayout, IconUsers } from '@/components/icons';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  stat?: string;
}

function ProblemCard({ icon, title, description, index, stat }: ProblemCardProps) {
  return (
    <FadeIn delay={index} direction="up">
      <Card 
        variant="default" 
        padding="lg" 
        className="h-full group cursor-default transition-all duration-500 hover:border-primary/30"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-accent w-8 h-8 transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            {stat && (
              <span className="text-xs text-text-subtle font-mono bg-bg-alt px-2 py-1 rounded">
                {stat}
              </span>
            )}
          </div>
          
          <h3 className="text-text font-semibold text-xl leading-snug transition-colors duration-300 group-hover:text-accent">
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
      className="bg-bg-alt section-glow relative"
      style={{
        paddingBlock: 'var(--spacing-section)',
      }}
    >
      <div className="container relative z-10">
        <FadeIn direction="up">
          <SectionHeader
            title="Вы знаете, что хотите сказать. Слайды — отдельная история."
            subtitle="Тратите часы на оформление вместо содержания? Вы не одиноки."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <ProblemCard
            icon={<IconClock size={28} />}
            title="PowerPoint отнимает часы"
            description="Выравнивание, шрифты, цвета — вы тратите время на технические детали, а не на смысл. Одна презентация — это 4–8 часов, которых больше нет."
            stat="4-8 часов"
            index={1}
          />
          <ProblemCard
            icon={<IconDollar size={28} />}
            title="Дизайнер — дорого и долго"
            description="От 10 000 ₽ за deck. Итерации — отдельно. И это ещё если дизайнер свободен и понял задачу с первого раза."
            stat="от 10 000 ₽"
            index={2}
          />
          <ProblemCard
            icon={<IconLayout size={28} />}
            title="Шаблоны выглядят как шаблоны"
            description="Canva узнаётся с первого взгляда. Все эти готовые макеты выдают себя — и вашу аудиторию не обмануть."
            stat="признают сразу"
            index={3}
          />
        </div>

        <FadeIn delay={4} direction="up" className="mt-8">
          <Card 
            variant="bordered" 
            padding="lg"
            className="group transition-all duration-500 hover:border-accent/30"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-accent w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                  <IconUsers size={28} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-text font-semibold text-xl leading-snug mb-3 transition-colors duration-300 group-hover:text-accent"
                >
                  Для агентств — отдельная история
                </h3>
                <p className="text-text-muted text-base leading-relaxed"
                >
                  Каждый клиент требует свой стиль. Дизайнер — узкое горлышко всего процесса. 
                  Итерации в последний момент съедают маржу. Взять больше заказов без расширения штата — 
                  задача без решения. <span className="text-accent">До этого.</span>
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
