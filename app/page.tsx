import Jotai from '@/components/jotai/Jotai';
import Zustand from '@/components/zustand/Zustand';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '64px' }}>
      <h1 style={{ marginBottom: '32px' }}>상태 관리 라이브러리 맛보기</h1>

      <a href='https://npmtrends.com/jotai-vs-zustand' target='_blank'>
        NPM TREND
      </a>

      <div
        style={{
          display: 'flex',
          marginTop: '32px',
          gap: '32px',
        }}>
        <div style={{ flex: 1, border: '1px solid orange' }}>
          <h2>
            <a
              href='https://zustand.docs.pmnd.rs/getting-started/introduction'
              target='_blank'>
              Zustand
            </a>
          </h2>
          <Zustand />
        </div>

        <div style={{ flex: 1 }}>
          <h2>
            <a href='https://jotai.org/' target='_blank'>
              Jotai
            </a>
          </h2>
          <Jotai />
        </div>
      </div>
    </main>
  );
}
