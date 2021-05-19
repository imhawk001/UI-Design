import React from 'react'
import Circle from '../Circle/Circle';
import Button from '../Button/Button';
import CropFreeIcon from '@material-ui/icons/CropFree';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
const ScannerBoard = () => {
    return (
        <div className="ScannerBoardContainer" style={{ margin: '1rem auto' }}>
            <div className="BoardOne">
                <Circle classes="circle center-me" label="1" />
            </div>
            <div>
                <AddAPhotoIcon style={{ marginLeft: '-12rem' }} />
            </div>
            <div className="CamScanner">
                <p><CropFreeIcon style={{ height: '15rem', width: '14rem', color: '#87ceeb', border: '2px solid black', background: '#e0ffff' }} /></p>
            </div>

            <div className="buttons-row">
                <Button
                    classes="btn btn-small"
                    // click={() => dispatch({ type: ACTIONS.DEFAULT })}
                    label="Scan"
                />
            </div>
        </div>
    )
}

export default ScannerBoard
