import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Daydescription } from './daydescription';

@Injectable({
  providedIn: 'root'
})
export class DaydescriptionService {

  constructor(public http: HttpClient) { }
  save(dayDescription: Daydescription) {
    return this.http.post('http://localhost:8080/description', dayDescription);
  }

  findAll() {
    return this.http.get<Daydescription[]>('http://localhost:8080/description');
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/description/${id}`);
  }
  
  findById(id:number){
    return this.http.get<Daydescription>(`http://localhost:8080/description/${id}`);
  }
  update(dayDescription){
    return this.http.put(`http://localhost:8080/description`, dayDescription);
  }
}
