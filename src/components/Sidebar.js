import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <List>
        <nav>
          {items.map(({ label, name, icon, link, ...rest }) => (
            <ListItem key={name} button {...rest}>
              <div className={name === 'team' ? 'active menu' : 'menu'}>
                <Icon style={{ fontSize: 22 }} className={icon} />
                <ListItemText className='menu-item'>{label}</ListItemText>
              </div>
            </ListItem>
          ))}
        </nav>
      </List>
    </div>
  )
}

export default Sidebar