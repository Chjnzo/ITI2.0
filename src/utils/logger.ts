import { Sentry } from '@/lib/sentry';

type LogLevel = 'error' | 'warn' | 'info';

interface LogExtra {
  [key: string]: unknown;
}

function log(level: LogLevel, message: string, extra?: LogExtra): void {
  if (level === 'error') {
    console.error(`[ITI] ${message}`, extra ?? '');
    Sentry.captureException(new Error(message), { extra });
  } else if (level === 'warn') {
    console.warn(`[ITI] ${message}`, extra ?? '');
  } else {
    console.info(`[ITI] ${message}`, extra ?? '');
  }
}

export const logger = {
  error: (message: string, extra?: LogExtra) => log('error', message, extra),
  warn: (message: string, extra?: LogExtra) => log('warn', message, extra),
  info: (message: string, extra?: LogExtra) => log('info', message, extra),
};
