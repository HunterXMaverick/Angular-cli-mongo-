import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketJwtService extends Socket {

  constructor() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5vbWJyZSI6Ilplcm8iLCJwYXNzdyI6IiQyYiQxMCRYM0swV2I3emdaZlA2WFp0UmJxSzVlOVdQZVo0SFVpQUVRNldwc3VRMzZ4em04Y3hCcUdEYSIsImNyZWFydGVBdCI6IjIwMjAtMDctMDFUMDc6NTE6MjcuOTA5WiIsInNlc3Npb25JRCI6Imt4Y2VKVXZILXBGS2x6dmFVZzFFUE1tX0tWZlhiamRxIiwiX2lkIjoiNWVmYzQwN2ZiNTViNzczMDcwNzU2YmIwIiwicm9sIjoiYWRkIn0sImlhdCI6MTU5NDAxMzIxNCwiZXhwIjoxNTk0NjEzMjE0fQ.bmq6Ob-UJ8lKfyeMmPvD9l4hGPO7zVDd06Ssl2zYYCw';
    super({url: 'http://localhost:3500', options: {
        query: `token=${token}`
      }
    })
  }
}
