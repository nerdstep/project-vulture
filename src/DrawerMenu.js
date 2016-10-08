import React from 'react'
import { Link } from 'react-router'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import Toggle from 'material-ui/Toggle';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Download from 'material-ui/svg-icons/file/file-download'
import Delete from 'material-ui/svg-icons/action/delete'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart'
import {blue500, yellow600} from 'material-ui/styles/colors'

const styles = {
  block: {
    maxWidth: 224,
  },
  toggle: {
    padding: 16,
  },
};

function DrawerMenu({ isLoading, isOpen, onToggleLoading }) {
  return (
    <Drawer open={isOpen} className="DrawerMenu">
      <Link to="/"><MenuItem primaryText="Home" leftIcon={<ActionHome />} /></Link>
      <Subheader>Actions</Subheader>
      <Link to="/preview"><MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} /></Link>
      <Link to="/share"><MenuItem primaryText="Share" leftIcon={<PersonAdd />} /></Link>
      <Link to="/download"><MenuItem primaryText="Download" leftIcon={<Download />} /></Link>
      <Divider />
      <MenuItem primaryText="Remove" leftIcon={<Delete />} />
      <Divider />
      <div style={styles.block}>
        <Toggle
          label="Toggle Loading"
          defaultToggled={isLoading}
          style={styles.toggle}
          onToggle={onToggleLoading}
        />
      </div>
      <Divider />
      <List>
        <Subheader>Files</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Document One"
          secondaryText="Jan 20, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<ActionInfo />}
          primaryText="Document Two"
          secondaryText="Jan 10, 2014"
        />
      </List>
    </Drawer>
  )
}

export default DrawerMenu
