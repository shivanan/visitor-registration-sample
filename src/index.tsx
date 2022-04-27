import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Input, Button, AsyncButton } from "uxp/components";
import './styles.scss';

interface IUIProps {
    uxpContext?: IContextProvider
}
function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const MobileUI: React.FunctionComponent<IUIProps> = (props) => {
    let [host, setHost] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [date, setDate] = React.useState(new Date());
    let [time, setTime] = React.useState(date.toTimeString());
    let [title, setTitle] = React.useState('');
    let [venue,setVenue] = React.useState('Building 1');
    let [visitors, setVisitors] = React.useState([]);

    let [newVisitorName, setNewVisitorName] = React.useState('');
    let [newVisitorEmail, setNewVisitorEmail] = React.useState('');
    let [newVisitorCompany, setNewVisitorCompany] = React.useState('');

    return <div className="mobile-ui">
        <div className='banner'>Visitor Registration</div>
        <div className='field'>
            <label>Meeting Title</label>
            <Input placeholder="Into Meetup" value={title} onChange={setTitle} />
        </div>


        <div className='field-row'>
            <div className='field'>
                <label>Date</label>
                <input type="date" value={date.toISOString().substring(0, 10)} onChange={(e) => setDate(new Date(e.target.value))} />
            </div>
            <div className='field'>
                <label>Time</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
        </div>
        <div className='field'>
            <label>Host Name</label>
            <Input placeholder="Name" value={host} onChange={setHost} />
        </div>
        <div className='field'>
            <label>Location</label>
            <Input placeholder="Building 1" value={venue} onChange={setVenue} />
        </div>
        <div className='visitors'>
            {
                visitors.map((v, i) => {
                    return <div className='visitor'>
                        <div className='name'>{v.name}</div>
                        <div className='more'>
                            <div className='email'>{v.email}</div>
                            <div className='company'>{v.company}</div>
                        </div>
                        <div className='deleter' onClick={()=>{
                            visitors.splice(i,1);
                            setVisitors(visitors.slice());
                        }}>Remove</div>
                    </div>;
                })
            }
        </div>
        <div className='new-visitor'>
            <div className='h'>Add a visitor</div>
            <div className='field'>
                <label>Name</label>
                <Input placeholder="Name" value={newVisitorName} onChange={setNewVisitorName} />
            </div>
            <div className='field'>
                <label>Email</label>
                <Input placeholder="Email" value={newVisitorEmail} onChange={setNewVisitorEmail} />
            </div>
            <div className='field'>
                <label>Company</label>
                <Input placeholder="Company" value={newVisitorCompany} onChange={setNewVisitorCompany} />
            </div>
            <div>
                <Button onClick={() => {
                    visitors.push({name:newVisitorName,email:newVisitorEmail,company:newVisitorCompany});
                    setVisitors(visitors.slice());
                    setNewVisitorCompany('');
                    setNewVisitorEmail('');
                    setNewVisitorName('');
                }} title={'Add Visitor'} />
            </div>
        </div>
        <div className="spacer" />
        <div className='actions'>
            <AsyncButton onClick={async () => {
                try {
                let r = await props.uxpContext.executeAction('SimpleVisitorForm','CreateVisit',{
                    date:date.toISOString().substring(0,10),
                    time:time.substring(0,5),
                    venue,
                    meeting:title,
                    contact:host,
                    visitors,
                },{json:true});
                alert('Submitted');
                location.reload();
            } catch(e) {
                alert(e);
            }
            }} title={'Submit'} />
        </div>

    </div>
}

registerUI({
    id: "mobile-ui",
    component: MobileUI,
    showDefaultHeader: false
});