import React from 'react';
import Header from '../components/Header';
import MovieInfo from '../components/MovieInfo';

const MovieDetailPage = () => {
    const movie = {
        title: '아바타',
        director: '제임스 카메론',
        releaseDate: '2009. 12. 17',
        description: `구 에너지 고갈 문제를 해결하기 위해 판도라 행성으로 향한 인류는 원주민 ‘나비족’과 대립하게 된다. 
                      이 과정에서, 전직 해병대원 제이크 설리(샘 워싱턴)가 ‘아바타’ 프로그램을 통해 ‘나비족’의 중심부에 
                      투입되는데… 피할 수 없는 전쟁! 이 모든 운명을 손에 쥔 제이크! 그 누구도 넘보지 못한 역대급 세계가 
                      열린다! 아바타: 인간과 ‘나비족’의 DNA를 결합해 만들어졌으며 링크룸을 통해 인간의 의식으로 원격 
                      조종할 수 있는 새로운 생명체.`,
        posterUrl: 'http://file.koreafilm.or.kr/thm/02/00/01/36/tn_DPF001624.jpg'
    };

    return (
        <div style={styles.pageContainer}>
            <Header headername={"영화 상세 페이지"}/>
            <MovieInfo movie={movie}
            />
        </div>
    );
};

const styles = {
    pageContainer: {
        fontFamily: 'Arial, sans-serif',
    },
};

export default MovieDetailPage;
