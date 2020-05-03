import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { StoreState } from "../../store";
import { selectDirectorySections } from "../../features/directory/selectors";

interface Section {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
}

interface DirectoryState {
  sections: Section[];
}

const Directory = ({sections}: DirectoryState) => (
  <div className='directory-menu'>
    {sections.map(({ id, size = '', ...otherSectionProps }) => (
      <MenuItem key={id} size={size} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<StoreState, DirectoryState>({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
