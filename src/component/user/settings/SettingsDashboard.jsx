import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';



const SettingsDashboard = () => {
  return (
          <Grid>
            <Grid.Column width={12}>
            </Grid.Column>
            <Grid.Column width={4}>
              <SettingsNav />
            </Grid.Column>
          </Grid>
  );
}

export default SettingsDashboard;
