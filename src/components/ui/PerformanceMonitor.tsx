'use client'

import { useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

interface PerformanceMonitorProps {
  onMetric?: (metric: any) => void
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onMetric }) => {
  useEffect(() => {
    // Track Core Web Vitals
    getCLS((metric) => {
      console.log('CLS:', metric)
      onMetric?.(metric)
    })
    
    getFID((metric) => {
      console.log('FID:', metric)
      onMetric?.(metric)
    })
    
    getFCP((metric) => {
      console.log('FCP:', metric)
      onMetric?.(metric)
    })
    
    getLCP((metric) => {
      console.log('LCP:', metric)
      onMetric?.(metric)
    })
    
    getTTFB((metric) => {
      console.log('TTFB:', metric)
      onMetric?.(metric)
    })

    // Track custom performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            const metrics = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              domInteractive: navEntry.domInteractive,
              firstPaint: navEntry.responseStart,
              totalLoadTime: navEntry.loadEventEnd - navEntry.fetchStart,
            }
            console.log('Navigation timing:', metrics)
            onMetric?.(metrics)
          }
        }
      })

      observer.observe({ entryTypes: ['navigation', 'paint'] })

      return () => observer.disconnect()
    }
  }, [onMetric])

  return null
}

export default PerformanceMonitor
