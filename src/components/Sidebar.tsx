import React from 'react';
import { useHistory } from 'react-router';
import styles from './Sidebar.module.css';
import { SidebarItem } from './SidebarItem';

export function Sidebar(): JSX.Element {
  const history = useHistory();

  return (
    <div className={styles.root}>
      <div className={styles.titlebar} />
      <SidebarItem primaryText="Home" onClick={() => history.push(`/`)} />
    </div>
  );
}
