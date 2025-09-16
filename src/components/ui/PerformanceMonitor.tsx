'use client'

import { useEffect, useState } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

interface PerformanceMonitorProps {
  onMetric?: (metric: any) => void
  enableReporting?: boolean
}

interface PerformanceMetrics {
  cls: number | null
  fid: number | null
  fcp: number | null
  lcp: number | null
  ttfb: number | null
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetric, 
  enableReporting = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  })

  useEffect(() => {
    // Track Core Web Vitals with enhanced logging
    getCLS((metric) => {
      const value = metric.value
      const status = value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor'
      
      console.log(`📊 CLS: ${value.toFixed(3)} (${status})`)
      setMetrics(prev => ({ ...prev, cls: value }))
      onMetric?.({ ...metric, status })
    })
    
    getFID((metric) => {
      const value = metric.value
      const status = value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor'
      
      console.log(`📊 FID: ${value.toFixed(1)}ms (${status})`)
      setMetrics(prev => ({ ...prev, fid: value }))
      onMetric?.({ ...metric, status })
    })
    
    getFCP((metric) => {
      const value = metric.value
      const status = value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor'
      
      console.log(`📊 FCP: ${value.toFixed(1)}ms (${status})`)
      setMetrics(prev => ({ ...prev, fcp: value }))
      onMetric?.({ ...metric, status })
    })
    
    getLCP((metric) => {
      const value = metric.value
      const status = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor'
      
      console.log(`📊 LCP: ${value.toFixed(1)}ms (${status})`)
      setMetrics(prev => ({ ...prev, lcp: value }))
      onMetric?.({ ...metric, status })
    })
    
    getTTFB((metric) => {
      const value = metric.value
      const status = value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor'
      
      console.log(`📊 TTFB: ${value.toFixed(1)}ms (${status})`)
      setMetrics(prev => ({ ...prev, ttfb: value }))
      onMetric?.({ ...metric, status })
    })

    // Track custom performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            const customMetrics = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              domInteractive: navEntry.domInteractive,
              firstPaint: navEntry.responseStart,
              totalLoadTime: navEntry.loadEventEnd - navEntry.fetchStart,
            }
            console.log('📈 Navigation timing:', customMetrics)
            onMetric?.(customMetrics)
          }
          
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformancePaintTiming
            console.log(`🎨 ${paintEntry.name}: ${paintEntry.startTime.toFixed(1)}ms`)
          }
        }
      })

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })

      return () => observer.disconnect()
    }
  }, [onMetric])

  // Report metrics to analytics if enabled
  useEffect(() => {
    if (enableReporting && metrics.cls !== null && metrics.fid !== null && 
        metrics.fcp !== null && metrics.lcp !== null && metrics.ttfb !== null) {
      
      // Calculate overall performance score
      const scores = {
        cls: metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 75 : 50,
        fid: metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 75 : 50,
        fcp: metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 75 : 50,
        lcp: metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 75 : 50,
        ttfb: metrics.ttfb <= 800 ? 100 : metrics.ttfb <= 1800 ? 75 : 50,
      }
      
      const overallScore = Math.round(
        (scores.cls + scores.fid + scores.fcp + scores.lcp + scores.ttfb) / 5
      )
      
      console.log(`🏆 Overall Performance Score: ${overallScore}/100`)
      
      // Send to analytics (replace with your analytics service)
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: overallScore,
          custom_map: {
            cls: metrics.cls,
            fid: metrics.fid,
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            ttfb: metrics.ttfb,
          }
        })
      }
    }
  }, [metrics, enableReporting])

  return null
}

export default PerformanceMonitor
