import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([
    { id: "1244", title: "All-day event", data: "2022-09-14" },
    { id: "1243", title: "timed event", data: "2022-09-15" },
  ]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDataClick = (selected) => {
    const title = prompt("Please enter a title for your event");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(`Are you sure do delete the event ${selected.event.title}`)
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="0 40px 0 40px">
      <Header subtitle="Manage your events" title="Calender" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          borderRadius="4px"
          p="15px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.blueAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                      {/* {event.start} */}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          flex="1 1 100%"
          ml="15px"
          sx={{
            "& .fc-scrollgrid-section-header, .fc-scrollgrid-section-body  table tr, th":
              {
                borderColor: `${colors.grey[500]} !important`,
                // padding: "10px !important",
              },
            "& .fc-scrollgrid-section-body tr, th": {
              borderColor: `${colors.grey[500]} !important`,
              // padding: "10px !important",
            },
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,today,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDataClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1244", title: "All-day event", data: "2022-09-14" },
              { id: "1243", title: "timed event", data: "2022-09-15" },
            ]}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
