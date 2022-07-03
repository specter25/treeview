import React, { Fragment, useState } from 'react'
import { catalogue } from './data'
import FolderComponent from './FolderComponent'

const MacOS = () => {
    const [property, setProperty] = useState("namespaces")
    const [Folder, setFolder] = useState((catalogue))
    return (
        <Fragment>
            <div id="finder">
                <div id="toolbar">
                    <div id="traffic-light">
                        <div id="red" />
                        <div id="yellow" />
                        <div id="green" />
                    </div>
                    <div id="windowname">
                        <i />
                        All My Files
                    </div>
                    <div id="actions">
                        <div id="back" />
                        <div id="next" />
                        <div id="iconV" />
                        <div id="list" />
                        <div id="grid" />
                        <div id="coverflow">
                            <i className="view" />
                        </div>
                        <div id="settings" />
                        <div id="share" />
                        <input results={0} type="search" />
                    </div>
                </div>
                <div id="view">
                    <div id="sidebar">
                        <ul>
                            <li>
                                <span className="group">
                                    Favorites
                                </span>
                                <ul>
                                    <li className="current_page">
                                        <i className="afiles" />
                                        All My Files
                                    </li>
                                    <li>
                                        <i className="airdrop" />
                                        AirDrop
                                    </li>
                                    <li>
                                        <i className="apps" />
                                        Applications
                                    </li>
                                    <li>
                                        <i className="desk" />
                                        Desktop
                                    </li>
                                    <li>
                                        <i className="docs" />
                                        Documents
                                    </li>
                                    <li>
                                        <i className="downs" />
                                        Downloads
                                    </li>
                                    <li>
                                        <i className="mov" />
                                        Movies
                                    </li>
                                    <li>
                                        <i className="music" />
                                        Music
                                    </li>
                                    <li>
                                        <i className="pic" />
                                        Pictures
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="group">
                                    Shared
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div id="content">
                        {Folder.map((value, key) => {
                            return (
                                <FolderComponent unique={key} value={value} setFolder={setFolder} property={property} setProperty={setProperty} />
                            )
                        })}
                        {/* <div className="folder">
                            <div className="icon" />
                            <span>
                                Desktop
                            </span>
                        </div>
                        <div className="folder">
                            <div className="icon" />
                            <span>
                                Documents
                            </span>
                        </div>
                        <div className="folder">
                            <div className="icon" />
                            <span>
                                Downloads
                            </span>
                        </div>
                        <div className="folder">
                            <div className="icon" />
                            <span>
                                Movies
                            </span>
                        </div>
                        <div className="folder">
                            <div className="icon" />
                            <span>
                                Music
                            </span>
                        </div>
                        <div className="folder">
                            <div className="icon" />
                            <span>
                                Pictures
                            </span>
                        </div>
                        <div className="folder">
                            <div className="icon" />
                            <span>
                                Public
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MacOS