import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CustomCard({ title, content }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
