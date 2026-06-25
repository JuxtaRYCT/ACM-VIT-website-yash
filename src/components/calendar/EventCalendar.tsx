import { useState, useCallback, useEffect } from 'react';
import { SAMPLE_EVENTS, DOMAIN_COLORS, type CalendarEvent, type EventDomain } from '../../data/calendarEventsData';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatTime(t: string) {
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${ampm}`;
}

function getEventsForDate(date: string, filters: Set<EventDomain>, allEvents: CalendarEvent[]) {
  const events = allEvents.filter(e => e.date === date);
  if (filters.size === 0) return events;
  return events.filter(e => filters.has(e.domain));
}

// Inline SVG: tape reel icon (two reels + tape path)
function TapeReelIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="12" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
      <path d="M11.5 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

const SCREW_D = "M9.595 0C14.894 0 19.189 4.296 19.189 9.595C19.188 14.893 14.893 19.188 9.595 19.189C4.296 19.189 0 14.893 0 9.595C0 4.296 4.296 0 9.595 0ZM10.378 3.853C10.205 2.999 8.984 2.999 8.811 3.853L8.078 7.454C8.014 7.769 7.769 8.014 7.454 8.078L3.853 8.811C2.999 8.984 2.999 10.204 3.853 10.378L7.454 11.11C7.769 11.174 8.014 11.42 8.078 11.734L8.811 15.336C8.984 16.19 10.205 16.19 10.378 15.336L11.111 11.734C11.175 11.42 11.42 11.174 11.735 11.11L15.336 10.378C16.19 10.204 16.19 8.984 15.336 8.811L11.735 8.078C11.42 8.014 11.175 7.769 11.111 7.454L10.378 3.853Z";

function EventDetailCard({ event, onClose }: { event: CalendarEvent; onClose: () => void }) {
  const colors = DOMAIN_COLORS[event.domain];
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="cal-detail-overlay" onClick={onClose}>
      <div className="cal-cassette-wrapper" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="cal-detail-close" onClick={onClose} aria-label="Close">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Full cassette frame — single composed SVG with real proportions */}
        <svg className="cal-cassette-frame" viewBox="0 0 576 353" fill="none">
          {/* BG body */}
          <rect x="0.8" y="0.8" width="574.06" height="351.26" rx="24.25" fill="#FCE6D2" stroke="#202020" strokeWidth="1.6"/>

          {/* Corner screws */}
          <g transform="translate(14.5,14)"><path d={SCREW_D} fill="#202020"/></g>
          <g transform="translate(14.5,319.9)"><path d={SCREW_D} fill="#202020"/></g>
          <g transform="translate(542.2,14)"><path d={SCREW_D} fill="#202020"/></g>
          <g transform="translate(542.2,319.9)"><path d={SCREW_D} fill="#202020"/></g>

          {/* Cover fill — dark label area with beveled top corners */}
          <g transform="translate(32,14)">
            <path d="M479 0.8H31C26.5 0.8 22.2 2.6 19 5.8L5.5 19.2C2.3 22.4 0.5 26.8 0.5 31.3V209C0.5 218.4 8.1 226 17.5 226H492.5C501.9 226 509.5 218.4 509.5 209V31.3C509.5 26.8 507.7 22.4 504.5 19.2L491 5.8C487.8 2.6 483.5 0.8 479 0.8Z" fill="#261D1E" stroke="#202020" strokeWidth="1.6"/>
          </g>

          {/* Tape path lines — connecting label area to bottom reels */}
          <path d="M67.4 145.5C61.9 189.6 40.2 294.7 45.8 328.6" stroke="#202020" strokeWidth="0.53"/>
          <path d="M62.4 342.5C99.4 343 509.3 342.5 513.3 342.5" stroke="#202020" strokeWidth="0.53"/>
          <path d="M436.3 138.1C455.1 166 515.9 277.8 529.5 321.4" stroke="#202020" strokeWidth="0.53"/>

          {/* Bump trapezoid — bottom frame */}
          <path d="M129.7 273.2H450.2C457.6 273.2 464.1 278.2 465.9 285.4L483 352.1H93.3L114.2 284.6C116.3 277.8 122.6 273.2 129.7 273.2Z" stroke="#202020" strokeWidth="1.6"/>

          {/* Bump details — tape guide circles, square windows, center tab */}
          <circle cx="151.9" cy="327.8" r="14.1" stroke="#202020" strokeWidth="1.6"/>
          <circle cx="424.3" cy="327.8" r="14.1" stroke="#202020" strokeWidth="1.6"/>
          <rect x="197.5" y="313.7" width="18.7" height="18.7" rx="2.4" stroke="#202020" strokeWidth="1.6"/>
          <rect x="360.1" y="313.7" width="18.7" height="18.7" rx="2.4" stroke="#202020" strokeWidth="1.6"/>
          <path d="M277.7 333.1C277.7 331.4 279.1 329.9 280.9 329.9H294.8C296.5 329.9 298 331.4 298 333.1V342.7H277.7V333.1Z" fill="#202020"/>

          {/* Bottom reel rings (outer + inner) */}
          <path d="M62.4 308.6C71.8 308.6 79.4 316.3 79.4 325.7C79.4 335.1 71.8 342.7 62.4 342.7C52.9 342.7 45.3 335.1 45.3 325.7C45.3 316.3 52.9 308.6 62.4 308.6ZM62.4 318.5C58.4 318.5 55.2 321.7 55.2 325.7C55.2 329.6 58.4 332.9 62.4 332.9C66.3 332.9 69.5 329.6 69.5 325.7C69.5 321.7 66.3 318.5 62.4 318.5Z" fill="#202020"/>
          <path d="M513.3 308.6C522.7 308.6 530.4 316.3 530.4 325.7C530.4 335.1 522.7 342.7 513.3 342.7C503.9 342.7 496.2 335.1 496.2 325.7C496.2 316.3 503.9 308.6 513.3 308.6ZM513.3 318.5C509.3 318.5 506.1 321.7 506.1 325.7C506.1 329.6 509.3 332.9 513.3 332.9C517.3 332.9 520.5 329.6 520.5 325.7C520.5 321.7 517.3 318.5 513.3 318.5Z" fill="#202020"/>

          {/* Center sparkle in bump area */}
          <path d="M287.8 279.3C293.1 279.3 297.4 283.6 297.4 288.9C297.4 294.2 293.1 298.5 287.8 298.5C282.5 298.5 278.2 294.2 278.2 288.9C278.2 283.6 282.5 279.3 287.8 279.3ZM288.6 283.2C288.4 282.3 287.2 282.3 287 283.2L286.3 286.8C286.3 287.1 286 287.3 285.7 287.4L282.1 288.1C281.2 288.3 281.2 289.5 282.1 289.7L285.7 290.4C286 290.5 286.2 290.7 286.3 291L287 294.6C287.2 295.5 288.4 295.5 288.6 294.6L289.3 291C289.4 290.7 289.7 290.5 290 290.4L293.6 289.7C294.4 289.5 294.4 288.3 293.6 288.1L290 287.4C289.7 287.3 289.4 287.1 289.3 286.8L288.6 283.2Z" fill="#202020"/>

        </svg>

        {/* Brand labels — on cream body above cover */}
        <div className="cal-cassette-brand-row">
          <span className="cal-cassette-brand">ACM-VIT</span>
          <span className="cal-cassette-type" style={{ color: colors.border }}>{colors.label.toUpperCase()}</span>
        </div>

        {/* Event content — overlaid on dark cover area */}
        <div className="cal-label-content">
          <div className="cal-label-glow" style={{ background: `radial-gradient(ellipse 100% 50% at 50% 120%, ${colors.border}18 0%, transparent 70%)` }} />
          <div className="cal-label-side" style={{ color: colors.border }}>A SIDE</div>

          <div className="cal-label-domain" style={{ color: colors.text }}>
            <span className="cal-domain-dot" style={{ background: colors.border }} />
            {colors.label}
          </div>

          <h3 className="cal-label-title">{event.title}</h3>

          <div className="cal-label-meta">
            <span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {new Date(event.date + 'T00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {formatTime(event.startTime)} – {formatTime(event.endTime)}
            </span>
            <span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {event.location}
            </span>
          </div>

          <p className="cal-label-desc">{event.description}</p>

          {event.href && (
            <a
              href={event.href}
              className="cal-label-link"
              style={{ color: colors.text, borderColor: colors.border }}
            >
              Read Blog →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 6, 1));
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<EventDomain>>(new Set());
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>(SAMPLE_EVENTS);
  const today = new Date();

  // Fetch blog dates and merge into calendar events
  useEffect(() => {
    fetch('/api/blog-dates')
      .then(res => res.json())
      .then((blogDates: { title: string; date: string; url: string; source: string }[]) => {
        const blogEvents: CalendarEvent[] = blogDates.map((b, i) => ({
          id: `blog-${i}`,
          title: b.title,
          date: b.date,
          startTime: '00:00',
          endTime: '23:59',
          domain: 'blog' as EventDomain,
          description: `Blog post published on ${b.source === 'hashnode' ? 'Hashnode' : 'Medium'}`,
          location: b.source === 'hashnode' ? 'blog.acmvit.in' : 'medium.com/acmvit',
          href: b.url,
        }));
        setAllEvents([...SAMPLE_EVENTS, ...blogEvents]);
      })
      .catch(() => { /* keep static events on failure */ });
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const toggleFilter = useCallback((domain: EventDomain) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain);
      else next.add(domain);
      return next;
    });
  }, []);

  const navigate = (dir: number) => {
    setCurrentDate(prev => {
      const d = new Date(prev);
      if (viewMode === 'month') d.setMonth(d.getMonth() + dir);
      else d.setDate(d.getDate() + dir * 7);
      return d;
    });
  };

  const buildMonthGrid = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const prevMonthDays = getDaysInMonth(year, month - 1);
    const cells: { date: Date; isCurrentMonth: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--)
      cells.push({ date: new Date(year, month - 1, prevMonthDays - i), isCurrentMonth: false });
    for (let i = 1; i <= daysInMonth; i++)
      cells.push({ date: new Date(year, month, i), isCurrentMonth: true });
    const remaining = 42 - cells.length;
    for (let i = 1; i <= remaining; i++)
      cells.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    return cells;
  };

  const buildWeekGrid = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      return { date: d, isCurrentMonth: d.getMonth() === month };
    });
  };

  const cells = viewMode === 'month' ? buildMonthGrid() : buildWeekGrid();
  const isToday = (d: Date) =>
    d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();

  return (
    <div className="cal-container">
      {/* Toolbar */}
      <div className="cal-toolbar">
        <div className="cal-toolbar-left">
          <TapeReelIcon size={22} className="cal-tape-icon" />
          <button className="cal-nav-btn" onClick={() => navigate(-1)} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <h2 className="cal-month-label">{MONTHS[month]} {year}</h2>
          <button className="cal-nav-btn" onClick={() => navigate(1)} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <button className="cal-today-btn" onClick={() => setCurrentDate(new Date())}>Today</button>

        <div className="cal-view-toggle">
          <button className={`cal-view-btn ${viewMode === 'month' ? 'cal-view-active' : ''}`} onClick={() => setViewMode('month')}>Month</button>
          <button className={`cal-view-btn ${viewMode === 'week' ? 'cal-view-active' : ''}`} onClick={() => setViewMode('week')}>Week</button>
        </div>
      </div>

      {/* Domain Legend with cassette thumbnails */}
      <div className="cal-legend">
        {(Object.entries(DOMAIN_COLORS) as [EventDomain, typeof DOMAIN_COLORS[EventDomain]][]).map(([key, val]) => {
          const active = activeFilters.size === 0 || activeFilters.has(key);
          return (
            <button
              key={key}
              className={`cal-legend-pill ${active ? '' : 'cal-legend-inactive'}`}
              onClick={() => toggleFilter(key)}
              style={{ borderColor: active ? val.border : undefined }}
            >
              <img src={val.cassette} alt="" className="cal-legend-cassette" style={{ opacity: active ? 1 : 0.3 }} />
              <span className="cal-legend-text" style={{ color: active ? val.text : undefined }}>{val.label}</span>
            </button>
          );
        })}
      </div>

      {/* Day Headers */}
      <div className="cal-header-row">
        {DAYS.map(d => <div key={d} className="cal-header-cell">{d}</div>)}
      </div>

      {/* Grid */}
      <div className={`cal-grid ${viewMode === 'week' ? 'cal-grid-week' : ''}`}>
        {cells.map(({ date, isCurrentMonth }, i) => {
          const dateStr = formatDate(date);
          const events = getEventsForDate(dateStr, activeFilters, allEvents);
          const hasEvents = events.length > 0;
          const todayFlag = isToday(date);

          return (
            <div
              key={`${dateStr}-${i}`}
              className={`cal-day ${isCurrentMonth ? '' : 'cal-day-other'} ${todayFlag ? 'cal-day-today' : ''} ${hasEvents ? 'cal-day-has-events' : ''}`}
            >
              <span className={`cal-day-num ${todayFlag ? 'cal-day-num-today' : ''}`}>
                {date.getDate()}
              </span>

              {hasEvents && (
                <div className="cal-day-events">
                  {events.slice(0, 3).map(ev => {
                    const c = DOMAIN_COLORS[ev.domain];
                    return (
                      <div
                        key={ev.id}
                        className="cal-event-pill"
                        style={{ background: c.bg, borderLeftColor: c.border }}
                        onClick={() => setSelectedEvent(ev)}
                      >
                        <span className="cal-pill-text" style={{ color: c.text }}>{ev.title}</span>
                      </div>
                    );
                  })}
                  {events.length > 3 && (
                    <span className="cal-day-more">+{events.length - 3} more</span>
                  )}
                </div>
              )}

              {hasEvents && (
                <div className="cal-day-dots">
                  {events.slice(0, 4).map(ev => (
                    <span key={ev.id} className="cal-dot" style={{ background: DOMAIN_COLORS[ev.domain].border }} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Upcoming Events with cassette flair */}
      <div className="cal-upcoming">
        <div className="cal-upcoming-header">
          <h3 className="cal-upcoming-title">
            <TapeReelIcon size={18} className="cal-tape-icon" />
            Queue
          </h3>
          <div className="cal-tape-deck">
            <span className="cal-reel cal-reel-left" />
            <span className="cal-tape-strip" />
            <span className="cal-reel cal-reel-right" />
          </div>
        </div>
        {allEvents
          .filter(e => new Date(e.date) >= new Date(formatDate(currentDate)))
          .sort((a, b) => a.date.localeCompare(b.date))
          .slice(0, 5)
          .map(ev => {
            const colors = DOMAIN_COLORS[ev.domain];
            return (
              <div
                key={ev.id}
                className="cal-upcoming-item"
                onClick={() => setSelectedEvent(ev)}
                style={{ borderLeftColor: colors.border }}
              >
                <img src={colors.cassette} alt="" className="cal-upcoming-cassette" />
                <div className="cal-upcoming-info">
                  <span className="cal-upcoming-name">{ev.title}</span>
                  <span className="cal-upcoming-time" style={{ color: colors.text }}>
                    {new Date(ev.date + 'T00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {formatTime(ev.startTime)}
                  </span>
                </div>
              </div>
            );
          })}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailCard event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}
