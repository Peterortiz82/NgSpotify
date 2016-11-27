import { Component} from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../.././artist'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist;

  constructor(private spotifyService: SpotifyService) {}

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    })
  }

}
