import { Email, Github, Twitter } from '../lib/standalone';
import '../lib/tygr-contact.min.css';

Github.mount(document.getElementById('github'));
Twitter.mount(document.getElementById('twitter'));
Email.mount(document.getElementById('email'));
