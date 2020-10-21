import React, {Component, Fragment} from 'react';
import { axios } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';


const styles = theme =>({
    hidden : {
        display: 'none'
    }
})

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userId : "",
            userPassword: "",
            open : false
        }
    }

    handleClickOpen = () =>{
        this.setState({
            open:true
        })
    }

    handleClose = () => {
        this.setState({
            userId : "",
            userPassword: "",
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Button  color="inherit" onClick={this.handleClickOpen}>
                    로그인
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        로 그 인
                    </DialogTitle>
                    <DialogContent>
                    {/* <input className={classes.hidden} accept="image/" id="raised-button-file" type="file"  file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br></br>
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {this.state.fileName ==="" ? "프로필 이미지 선택" : this.state.fileName}
                        </Button>
                    </label> */}
                    {/* <br/> */}
                    <TextField label="아이디" type="text" name="userId" value={this.state.userId} onChange={this.handleValueChange}/><br></br>
                    <TextField label="비밀번호" type="password" name="userPassword" vlaue={this.state.userPassword} onChange={this.handleValueChange}/><br></br>
                    {/* <TextField label="성별"type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br></br>
                    <TextField label="직업"type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br></br> */}
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>로그인</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
            // <form onSubmit={this.handleFormSubmit}>
            //     <h1>고객 추가</h1>
            //     프로필 이미지 : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br></br>
            //     이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br></br>
            //     생년월일 : <input type="text" name="birthday" vlaue={this.state.birthday} onChange={this.handleValueChange}/><br></br>
            //     성별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br></br>
            //     직업 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br></br>
            //     <button type="submit">추가하기</button>
            // </form>
        )
    }

}

export default withStyles(styles)(LoginForm);