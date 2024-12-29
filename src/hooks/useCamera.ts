import { useState, useCallback } from 'react';

interface UseCameraReturn {
  stream: MediaStream | null;
  error: string | null;
  startCamera: () => Promise<void>;
  stopCamera: () => void;
}

export function useCamera(): UseCameraReturn {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera API is not supported in this browser');
      }

      const constraints = {
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
    } catch (err) {
      console.error('Camera error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Camera not available';
      setError(errorMessage);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setError(null);
  }, [stream]);

  return { stream, error, startCamera, stopCamera };
}