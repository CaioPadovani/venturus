<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row class="fill-height">
        <v-col cols="6" md="6">
          <v-card height="100%">
            <v-card-title style="color: #4c00ff"
              ><b style="color: #4c00ff">My Teams</b>
              <v-spacer></v-spacer>
              <v-btn class="btStyleColor mr-5" dark small to="/create">
                <v-icon> mdi-plus </v-icon>
              </v-btn>
            </v-card-title>
            <v-divider />
            <v-row justify="center">
              <v-col cols="4">
                <v-list nav dense>
                  <v-subheader
                    ><b>Name</b><v-spacer /><v-icon @click="sortName()"
                      >mdi-menu-swap</v-icon
                    ></v-subheader
                  >
                  <template v-for="item in teams">
                    <v-list-item v-if="item.myTeam === true" :key="item.id">
                      <v-list-item-content>
                        <v-list-item-title
                          ><b v-text="item.name"></b
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-col>
              <v-col cols="7">
                <v-list nav dense>
                  <v-subheader
                    ><b>Description</b><v-spacer />
                    <v-icon @click="sortDescription()"
                      >mdi-menu-swap</v-icon
                    ></v-subheader
                  >
                  <template v-for="item in teams">
                    <v-list-item v-if="item.myTeam === true" :key="item.id">
                      <v-list-item-content>
                        <v-list-item-title
                          ><b v-text="item.description"></b
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6" md="6">
          <v-card>
            <v-card-title style="color: #4c00ff"
              ><b style="color: #4c00ff">Top 5</b>
            </v-card-title>
            <v-divider />
            <v-row justify="center">
              <v-col cols="6">
                <v-card class="my-2 ml-5">
                  <v-list class="overflow-y-auto" nav dense>
                    <v-subheader><b>Highest avg age</b></v-subheader>
                    <v-list-item-group
                      v-model="Highest"
                      active-class="border"
                      color="rgba(237, 76, 105, 1)"
                    >
                      <v-list-item
                        v-for="(item, i) in teams
                          .slice(0, 5)
                          .sort((a, b) => (a.age < b.age ? 1 : -1))"
                        :key="i"
                        @click="send(item)"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            ><b>{{ item.name }}</b></v-list-item-title
                          >
                          <v-list-item-subtitle
                            v-text="item.age"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-icon>
                          <img :src="item.logo" width="30px" height="30px" />
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="my-2 mr-5">
                  <v-list class="overflow-y-auto" nav dense>
                    <v-subheader><b>Lowest avg age</b></v-subheader>
                    <v-list-item-group
                      v-model="Lowest"
                      active-class="border"
                      color="rgba(237, 76, 105, 1)"
                    >
                      <v-list-item
                        v-for="(item, i) in teams
                          .slice(0, 5)
                          .sort((a, b) => (a.age > b.age ? 1 : -1))"
                        :key="i"
                        @click="send(item)"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            ><b>{{ item.name }}</b></v-list-item-title
                          >
                          <v-list-item-subtitle
                            v-text="item.age"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-icon>
                          <img :src="item.logo" width="30px" height="30px" />
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      Highest: '',
      Lowest: '',
      teams: [],
    }
  },
  created() {
    const BdStorage = [
      {
        id: 1,
        name: 'Inter Milan',
        website: 'https://onefootball.com/pt-br/inicio',
        description: 'Inter Milan',
        formation: '3-2-2-3',
        fantasy: true,
        tags: ['Ataque'],

        logo:
          'https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2017/05/inter-de-mil%C3%A3o-Internazionale-Milano-escudo.png?fit=512%2C512&ssl=1',
        age: '31.9',
        myTeam: true,
        players: [
          {
            name: 'Romelu Lukaku',
            position: 'Atacante',
            age: '27',
            credibility: 95,
          },
          {
            name: 'Christian Eriksen',
            position: 'Meia',
            age: '29',
            credibility: 65,
          },
          {
            name: 'Alexis Sánchez',
            position: 'Atacante',
            age: '32',
            credibility: 75,
          },
        ],
      },
      {
        id: 2,
        name: 'APOEL Nicosia',
        website: 'https://onefootball.com/pt-br/inicio',
        description: 'Squad APOEL Nicosia',
        formation: '3-2-2-3',
        fantasy: true,
        tags: ['Ataque'],
        logo:
          'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/APOEL_FC_logo.svg/1200px-APOEL_FC_logo.svg.png',
        age: '31.7',
        myTeam: true,
        players: [
          {
            name: 'Jack Byrne',
            position: 'Meia',
            age: '27',
            credibility: 95,
          },
          {
            name: 'Joe Garner',
            position: 'Atacante',
            age: '29',
            credibility: 65,
          },
          {
            name: 'Ghayas Zahid',
            position: 'Meia',
            age: '32',
            credibility: 75,
          },
        ],
      },
      {
        id: 3,
        name: 'AC Milan',
        website: 'https://onefootball.com/pt-br/inicio',
        description: 'AC Milan Squad',
        formation: '3-2-2-3',
        fantasy: true,
        tags: ['Ataque'],
        logo:
          'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515303_10059.png',
        age: '31.6',
        myTeam: false,
        players: [
          {
            name: 'Zlatan Ibrahimović',
            position: 'Atacante',
            age: '39',
            credibility: 95,
          },
          {
            name: 'Hakan Calhanoğlu',
            position: 'Meia',
            age: '29',
            credibility: 65,
          },
          {
            name: 'Mario Mandžukić',
            position: 'Atacante',
            age: '32',
            credibility: 75,
          },
        ],
      },
      {
        id: 4,
        name: 'Besiktas JK',
        website: 'https://onefootball.com/pt-br/inicio',
        description: 'Club Besiktas JK',
        formation: '3-2-2-3',
        fantasy: true,
        tags: ['Ataque'],
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/d/da/BesiktasJK-Logo.svg',
        age: '31.4',
        myTeam: false,
        players: [
          {
            name: 'Vincent Aboubakar',
            position: 'Atacante',
            age: '27',
            credibility: 95,
          },
          {
            name: 'Cyle Larin',
            position: 'Atacante',
            age: '29',
            credibility: 65,
          },
          {
            name: 'Cenk Tosun',
            position: 'Atacante',
            age: '32',
            credibility: 75,
          },
        ],
      },
      {
        id: 5,
        name: 'Olympiacos Piraeus',
        website: 'https://onefootball.com/pt-br/inicio',
        description: 'Olympiacos Piraeus',
        formation: '3-2-2-3',
        fantasy: true,
        tags: ['Ataque'],
        logo:
          'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Olympiacos_FC_logo.svg/1200px-Olympiacos_FC_logo.svg.png',
        age: '31.3',
        myTeam: false,
        players: [
          {
            name: 'Youssef El-Arabi',
            position: 'Atacante',
            age: '27',
            credibility: 95,
          },
          {
            name: 'Mathieu Valbuena',
            position: 'Meia',
            age: '29',
            credibility: 65,
          },
          {
            name: 'Ahmed Hassan',
            position: 'Atacante',
            age: '32',
            credibility: 75,
          },
        ],
      },
    ]
    this.$store.commit('teams/SET_TEAM', BdStorage)
    console.log('Create Teams Storage', this.$store.getters['teams/getTeams'])
    this.teams = this.$store.getters['teams/getTeams']
  },
  methods: {
    send(value) {
      console.log(value)
      this.initials(value)
    },
    initials(value) {
      value.name = value.name.replace(/\s(de|da|dos|das)\s/g)
      const initials = value.name.match(/\b(\w)/g)
      const nome = initials.splice(0).join('').toUpperCase()
      const sobrenomes = initials.splice(1).join('').toUpperCase()
      return nome + sobrenomes
    },
    sortName() {
      this.teams = this.teams.slice(0).sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
    },
    sortDescription() {
      this.teams = this.teams.slice().sort((a, b) => {
        if (a.description > b.description) {
          return 1
        }
        if (a.description < b.description) {
          return -1
        }
        return 0
      })
    },
  },
}
</script>
<style>
.btStyleColor {
  background: linear-gradient(
    180deg,
    rgba(237, 76, 105, 1) 0%,
    rgba(147, 61, 123, 1) 60%
  );
}
.border {
  border: 2px double rgba(237, 76, 105, 1);
}
.full-height {
  height: 100%;
}
</style>
