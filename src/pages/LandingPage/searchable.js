import React,{useState} from "react";
import * as Icon from "react-feather";
import {
    Button,
  } from "react-bootstrap";
import SelectSearch from './SelectSearch';


const searchAble = ()=>{
    const [tractorModel,setTractorModel] = useState('')
    return (
        <>
          <ul class="list-unstyled search-front clearfix d-flex justify-content-center d-flex">
            <li className="col-3 px-0">
              <SelectSearch />
            </li>
            <li className="col-3 px-0">
              <SelectSearch />
            </li>
            <li className="col-3 px-0">
              <SelectSearch />
            </li>
            <li>
              <button className="btn-success p-1  searchAble border-right-radius" type="submit">
                <Icon.Search className="icon" />
              </button>\
            </li>
          </ul>
        </>
    )
}

export default searchAble