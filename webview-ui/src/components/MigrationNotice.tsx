import { Button } from './ui/Button.js';

interface MigrationNoticeProps {
  onDismiss: () => void;
}

export function MigrationNotice({ onDismiss }: MigrationNoticeProps) {
  return (
    <div
      className="absolute inset-0 bg-black/70 flex items-center justify-center z-100"
      onClick={onDismiss}
    >
      <div
        className="pixel-panel py-24 px-32 max-w-xl text-center leading-[1.3]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl mb-12 text-accent">사과드립니다!</div>
        <p className="text-xl m-0 mb-12">
          방금 완전한 오픈소스 에셋으로 마이그레이션했습니다. 모두 처음부터 정성껏 만들었어요.
          아쉽게도 이 과정에서 이전 레이아웃이 초기화되었습니다.
        </p>
        <p className="text-xl m-0 mb-12">정말 죄송합니다.</p>
        <p className="text-xl m-0 mb-12">
          좋은 소식은? 이번 한 번만 있는 일이고, 이를 통해 앞으로 정말 흥미로운 업데이트들을
          선보일 수 있게 되었습니다.
        </p>
        <p className="text-xl m-0 mb-20">기대해 주세요. Pixel Agents를 이용해 주셔서 감사합니다!</p>
        <Button variant="accent" size="xl" onClick={onDismiss}>
          확인
        </Button>
      </div>
    </div>
  );
}
