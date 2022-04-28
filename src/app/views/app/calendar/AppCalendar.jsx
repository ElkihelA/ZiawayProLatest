import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"; // needed for dayClick
import {
  getAllEvents,
  addNewEvent,
  updateEvent,
  deleteEvent
} from "./CalendarService";
import shortid from "shortid";
import CalendarEventDialog from "./CalendarEventDialog";

class AppCalendar extends Component {
  calendarComponentRef = React.createRef();
  externalEventRef = React.createRef();

  state = {
    eventDialogOpen: false,
    calendarEvents: [],
    eventObject: {},
    newEventInput: "",
    deleteEventOnDrop: false,
    externalEvents: [
      { title: "Hello world" },
      { title: "Payment schedule" },
      { title: "Go to shopping" },
      { title: "Rend due" },
      { title: "Car rent" }
    ]
  };

  toggleWeekends = () => {
    this.setState({
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = arg => {
    this.setState({
      eventDialogOpen: true,
      eventObject: {
        title: "",
        start: arg.date,
        allDay: arg.allDay,
        classNames: ["text-white"]
      }
    });
  };

  handleEventDrop = async ({
    event: {
      id,
      start,
      end,
      title,
      allDay,
      classNames,
      backgroundColor,
      extendedProps
    }
  }) => {
    let { data: eventList } = await updateEvent({
      id,
      start,
      end,
      title,
      allDay,
      classNames,
      color: backgroundColor
    });

    this.refreshFullCalendar(eventList);
  };

  handleExternalEventDrop = event => {
    let {
      date: start,
      allDay,
      draggedEl: {
        innerText: title,
        classList: { value: classNames }
      }
    } = event;

    this.handleEventDialogSubmit({
      start,
      title,
      allDay,
      classNames: classNames.concat(" text-white")
    });

    let { externalEvents = [], deleteEventOnDrop } = this.state;

    if (!deleteEventOnDrop) return;

    this.setState({
      externalEvents: externalEvents.filter(item => !item.title.match(title))
    });
  };

  handleDeleteEvent = async id => {
    if (!id) return;
    let { data: eventList } = await deleteEvent({ id });
    this.refreshFullCalendar(eventList);
  };

  toggleEventDialog = () => {
    this.setState({ eventDialogOpen: !this.state.eventDialogOpen });
  };

  handleEventDialogSubmit = async eventObject => {
    let eventList = [];

    if (eventObject.id) {
      let { data } = await updateEvent(eventObject);
      eventList = data;
    } else {
      let { data } = await addNewEvent(eventObject);
      eventList = data;
    }

    this.refreshFullCalendar(eventList);
  };

  handleEventClick = ({
    event: {
      id,
      start,
      end,
      title,
      allDay,
      classNames,
      backgroundColor,
      extendedProps
    }
  }) => {
    this.setState({
      eventDialogOpen: true,
      eventObject: {
        id,
        title,
        start,
        end,
        allDay,
        classNames,
        color: backgroundColor
      }
    });
  };

  handleChange = event => {
    let title = event.target.value;
    if (event.key === "Enter") {
      title = title.trim();
      if (title !== "") {
        this.setState({
          externalEvents: [...this.state.externalEvents, { title }],
          newEventInput: ""
        });
      }
    } else {
      this.setState({ newEventInput: title });
    }
  };

  refreshFullCalendar = (eventList = []) => {
    this.setState({
      calendarEvents: eventList.map(e => ({
        start: e.start,
        title: e.title,
        id: e.id,
        end: e.end,
        classNames: e.classNames,
        color: e.color,
        allDay: e.allDay
      })),
      eventDialogOpen: false
    });
  };

  componentDidMount() {
    getAllEvents().then(({ data }) => {
      if (this.state) this.setState({ calendarEvents: data });
    });

    let draggableEl = this.externalEventRef.current;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let title = eventEl.innerText;
        let id = shortid.generate();
        let classNames = eventEl.classList.value + " text-white";
        // this.handleEventDialogSubmit({
        //   event: { title, classNames, allDay: true }
        // });
        return { title, id, classNames, create: false };
      }
    });
  }

  render() {
    let {
      calendarEvents,
      calendarWeekends,
      eventDialogOpen,
      eventObject,
      newEventInput,
      deleteEventOnDrop,
      externalEvents = []
    } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[{ name: "Home", path: "/" }, { name: "Calendar" }]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="create_event_wrap">
                  <div className="form-group">
                    <label htmlFor="newEvent"> Create new Event</label>
                    <input
                      type="text"
                      name="newEvent"
                      className="form-control"
                      placeholder="new Event"
                      value={newEventInput}
                      onChange={this.handleChange}
                      onKeyUp={this.handleChange}
                    />
                  </div>

                  <ul
                    className="list-group"
                    id="external-events"
                    ref={this.externalEventRef}
                  >
                    {externalEvents.map((event, ind) => (
                      <li
                        key={ind}
                        style={{ backgroundColor: "#f5f5f5", color: "#000000" }}
                        className="list-group-item  fc-event"
                      >
                        {event.title}
                      </li>
                    ))}
                  </ul>
                  <p>
                    <label className="checkbox checkbox-primary">
                      <input
                        type="checkbox"
                        name="agree"
                        value={deleteEventOnDrop}
                        checked={deleteEventOnDrop}
                        onChange={e =>
                          this.setState({ deleteEventOnDrop: e.target.checked })
                        }
                      />
                      <span>Remove after drop</span>
                      <span className="checkmark"></span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card mb-4 o-hidden">
              <div className="card-body">
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  }}
                  themeSystem="bootstrap"
                  displayEventTime={false}
                  droppable={true}
                  editable={true}
                  eventLimit={true}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  ref={this.calendarComponentRef}
                  weekends={calendarWeekends}
                  events={calendarEvents}
                  dateClick={this.handleDateClick}
                  eventDrop={this.handleEventDrop}
                  eventResize={this.handleEventDrop}
                  eventClick={this.handleEventClick}
                  drop={this.handleExternalEventDrop}
                />
              </div>
            </div>
          </div>
        </div>
        <CalendarEventDialog
          open={eventDialogOpen}
          closeDialog={this.toggleEventDialog}
          handleSubmit={this.handleEventDialogSubmit}
          eventObject={eventObject}
          handleDeleteEvent={this.handleDeleteEvent}
        ></CalendarEventDialog>
      </div>
    );
  }
}

export default AppCalendar;
