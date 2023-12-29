// App.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from '@/App'

describe('App', async () => {
  it('Renders without crashing', async () => {
    // Setup
    const app = render(<App />);

    // Expectations
    expect(app).toBeTruthy();

  });
});
