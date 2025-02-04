"use client";

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function TransAsianDescription() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const description = `Discover our stunning collection of Asian trans models on Chaturbate. From Japanese to Korean, Chinese to Thai performers, our Asian section showcases the exotic beauty and charm of the East. Enjoy intimate live shows, engage in meaningful conversations, and experience the unique allure of Asian performers.`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Asian Trans Cams</h1>

      {isMobile ? (
        <details className="group">
          <summary
            className="flex items-center justify-end cursor-pointer -mt-8 mb-1"
          >
            <div className="transform transition-transform duration-200 group-open:rotate-180">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </summary>

          <div className="mt-1">
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </details>
      ) : (
        <p
          className="text-gray-600 mt-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}