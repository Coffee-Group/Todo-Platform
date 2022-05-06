import './App.css';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

// <Calendar usageStatistics={false} />
function App() {
  return (
    <div className="App">
        <MyComponent />
    </div>
  );
}

const myTheme = {
  // Theme object to extends default dark theme.
};

const today = new Date()
console.log(today.getDate());

const MyComponent = () => (
  <Calendar
    height="900px"
    calendars={[
      {
        id: '0',
        name: 'Private',
        bgColor: '#9e5fff',
        borderColor: '#9e5fff'
      },
      {
        id: '1',
        name: 'Company',
        bgColor: '#00a9ff',
        borderColor: '#00a9ff'
      }
    ]}
    disableDblClick={true}
    disableClick={false}
    isReadOnly={false}
    month={{
      startDayOfWeek: 0
    }}
    schedules={[
      {
        id: '1',
        calendarId: '0',
        title: 'TOAST UI Calendar Study',
        category: 'time',
        dueDateClass: '',
        start: today.toLocaleDateString,
        end: today.getDate('hours', today, 3, '+').toLocaleDateString
      },
      {
        id: '2',
        calendarId: '0',
        title: 'Practice',
        category: 'milestone',
        dueDateClass: '',
        start: today.getDate('date', today, 1, '+'),
        end: today.getDate('date', today, 1, '+').toLocaleDateString,
        isReadOnly: true
      },
      {
        id: '3',
        calendarId: '0',
        title: 'FE Workshop',
        category: 'allday',
        dueDateClass: '',
        start: today.getDate('date', today, 2, '-').toLocaleDateString,
        end: today.getDate('date', today, 1, '-').toLocaleDateString,
        isReadOnly: true
      },
      {
        id: '4',
        calendarId: '0',
        title: 'Report',
        category: 'time',
        dueDateClass: '',
        start: today.toLocaleDateString,
        end: today.getDate('hours', today, 1, '+').toLocaleDateString
      }
    ]}
    scheduleView
    taskView
    template={{
      milestone(schedule) {
        return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
          schedule.title
        }</span>`;
      },
      milestoneTitle() {
        return 'Milestone';
      },
      allday(schedule) {
        return `${schedule.title}<i class="fa fa-refresh"></i>`;
      },
      alldayTitle() {
        return 'All Day';
      }
    }}
    theme={myTheme}
    timezones={[
      {
        timezoneOffset: 540,
        displayLabel: 'GMT+09:00',
        tooltip: 'Seoul'
      },
      {
        timezoneOffset: -420,
        displayLabel: 'GMT-08:00',
        tooltip: 'Los Angeles'
      }
    ]}
    useDetailPopup
    useCreationPopup
    view={ 'month' } // You can also set the `defaultView` option.
    week={{
      showTimezoneCollapseButton: true,
      timezonesCollapsed: true
    }}
  />
);

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

export default App;
