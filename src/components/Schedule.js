import React from 'react'
import LocationCard from './LocationCard'
import ScheduleBar from './ScheduleBar'
import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'

function Schedule(){
    return (
        <Typography component="div" variant="body1">
            <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
              <h2>Schedule</h2>
              <ScheduleBar />
            </Box>
        </Typography>


    )

}

export default Schedule
