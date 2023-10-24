import React,{useState} from 'react'
import { Nav , Tab, Table,Button } from 'react-bootstrap'
import Card from '../../components/Card'

const FilesPicker =() =>{
    const [toggleState, setToggleState] = useState(true);
    return(
        <>
            <div class="nav-link static-item sidebar-card-files-picker">
                <label for="myinput" class="sidebar-btn-icon">
                    <div class="border-files-picker">
                        <div class="sidebar-border-profile-card mt-3">
                            <div class="sidebar-border-profile-body ">
                                <div class="sidebar-btn">
                                    <input id="myinput" type="file" hidden />
                                    <span class="sidebar-icon-files">
                                        <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.6667 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0622 3.92 22 7.33333 22H16.6667C20.0711 22 22 20.0622 22 16.6667V7.33333C22 3.92889 20.0711 2 16.6667 2Z" fill="currentColor"></path>
                                            <path d="M15.3205 12.7083H  12.7495V15.257C12.7495 15.6673 12.4139 16 12 16C11.5861 16 11.2505 15.6673 11.2505 15.257V12.7083H8.67955C8.29342 12.6687 8 12.3461 8 11.9613C8 11.5765 8.29342 11.2539 8.67955 11.2143H11.2424V8.67365C11.2824 8.29088 11.6078 8 11.996 8C12.3842 8 12.7095 8.29088 12.7495 8.67365V11.2143H15.3205C15.7066 11.2539 16 11.5765 16 11.9613C16 12.3461 15.7066 12.6687 15.3205 12.7083Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class="sidebar-border-user-data d-flex flex-column">
                                    <span class="sidebar-border-data sidebar-border-title mb-1">Add your Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </>
    )
}
export default FilesPicker;