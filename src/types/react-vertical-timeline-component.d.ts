declare module 'react-vertical-timeline-component' {
  export const VerticalTimeline: React.FC<{
    children?: React.ReactNode;
    className?: string;
    lineColor?: string;
  }>;

  export const VerticalTimelineElement: React.FC<{
    children?: React.ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
  }>;
} 